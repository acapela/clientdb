import { EntityRemoveChange } from "@clientdb/common/sync/change";
import { SyncRequestContext } from "../context";
import { EntityPointer } from "../entity/pointer";
import { createLogger } from "../utils/logger";
import { insertDeltaForChange } from "./delta";
import { getHasUserAccessTo } from "./entity";

const log = createLogger("Mutation");

export async function performRemove<T>(
  context: SyncRequestContext,
  input: EntityRemoveChange<T>
) {
  const { schema, db } = context;

  const entity = input.entity as any as string;
  const idField = schema.getIdField(entity)!;

  const entityPointer: EntityPointer = { entity, id: input.id };

  await db.transaction(async (tr) => {
    if (!(await getHasUserAccessTo(tr, entityPointer, context, "remove"))) {
      throw new Error(`Not allowed to remove ${entity}`);
    }

    await insertDeltaForChange(tr, entityPointer, context, "delete");

    const removeQuery = tr
      .table(entity)
      .delete()
      .andWhere(`${entity}.${idField}`, "=", input.id);

    log.debug("remove query", removeQuery.toString());
    const results = await removeQuery;

    if (results === 0) {
      throw new Error(`Not allowed to remove ${entity}`);
    }
  });
}
