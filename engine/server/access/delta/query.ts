import { pickPermissionsRule } from "../../change";
import { SyncRequestContext } from "../../context";
import { applyPermissionNeededJoins } from "../join/permissions";
import { getEntitiesWithAccessBasedOn } from "./impact";
import { createUserIdCoalease } from "./users";
import { applyDeltaWhere } from "./where";

interface AddedOrRemovedEntityInfo {
  // Entity that is either just created or about to be removed
  entity: string;
  id: string;
}

function createDeltaQueryForEntity(
  entity: string,
  changed: AddedOrRemovedEntityInfo,
  context: SyncRequestContext
) {
  const userTable = context.config.userTable;
  const userIdField = context.schema.getIdField(userTable)!;

  let query = context.db.from(entity).crossJoin(`${userTable} as allowed_user`);

  const permissionRule = pickPermissionsRule(
    context.permissions,
    entity,
    "read"
  );

  if (!permissionRule) {
    throw new Error(`No permission rule found for ${entity}`);
  }

  const idField = context.schema.getIdField(entity);

  if (!idField) {
    throw new Error(`No id field found for ${entity}`);
  }

  query = applyPermissionNeededJoins(
    query,
    entity,
    permissionRule,
    context.schema
  );

  const entityTypeColumn = context.db.raw("? as entity", [entity]);

  query = applyDeltaWhere(query, entity, changed.entity, changed.id, context);

  const entityIdSelectColumn = `${entity}.${idField}`;
  const allowedUserIdSelectColumn = `allowed_user.${userIdField}`;

  query = query.select([
    entityTypeColumn,
    `${entityIdSelectColumn} as id`,
    `${allowedUserIdSelectColumn} as user_id`,
  ]);

  query = query.groupBy([entityIdSelectColumn, allowedUserIdSelectColumn]);

  return query;
}

export function createDeltaQueriesForChange(
  changed: AddedOrRemovedEntityInfo,
  context: SyncRequestContext
) {
  const impactedEntities = getEntitiesWithAccessBasedOn(
    changed.entity,
    context
  );

  const impactInEntityDeltaQueries = impactedEntities.map((impactedEntity) => {
    return createDeltaQueryForEntity(impactedEntity, changed, context);
  });

  let query = context.db.queryBuilder();

  query = impactInEntityDeltaQueries.reduce((query, nextImpactedQuery) => {
    return query.unionAll(nextImpactedQuery);
  }, query);

  return query;
}
