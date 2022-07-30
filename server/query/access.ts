import { createLogger } from "@clientdb/server/utils/logger";
import {
  PermissionOperationType,
  PermissionRule,
} from "@clientdb/server/permissions/types";
import { applyPermissionWhereCauses } from "./where/permissions";
import { SyncRequestContext } from "@clientdb/server/context";
import { applyPermissionNeededJoins } from "@clientdb/server/permissions/joins";
import { pickPermissionsRule } from "@clientdb/server/permissions/picker";
import { applyEntityIdSelect } from "./select/entity";

export function createBasePermissionMapQuery<T>(
  entity: string,
  rule: PermissionRule<T>,
  context: SyncRequestContext
) {
  const { db } = context;

  let rootQuery = db.from(`${entity}`);

  rootQuery = applyPermissionNeededJoins(
    rootQuery,
    entity,
    rule,
    context.schema
  );

  rootQuery = applyPermissionWhereCauses(rootQuery, entity, rule, context);

  return rootQuery;
}

export function createAccessQuery<T>(
  context: SyncRequestContext,
  entity: string,
  operation: PermissionOperationType = "read"
) {
  const permission = pickPermissionsRule(
    context.permissions,
    entity,
    operation
  );

  if (!permission) return null;

  let query = createBasePermissionMapQuery(entity, permission, context);

  query = applyEntityIdSelect(query, entity, context.schema);

  query = query.limit(1);

  return query;
}
