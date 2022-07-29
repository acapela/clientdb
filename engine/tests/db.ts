import knex, { Knex } from "knex";
import { createSyncServer } from "../server";
import { permissions, schema, TestSchema } from "./schema";

async function guard(callback: () => any) {
  try {
    return await callback();
  } catch (error) {
    //
  }
}

export async function restartDb(db: Knex) {
  for (const entity of schema.entities) {
    if (!(await db.schema.hasTable(entity.name))) {
      console.log("no table");
      continue;
    }

    for (const relation of entity.relations) {
      if (relation.type === "reference") {
        await guard(() =>
          db.schema.alterTable(entity.name, (table) => {
            table.dropForeign(relation.field);
          })
        );
      } else {
        await guard(() =>
          db.schema.alterTable(relation.target, async (table) => {
            await table.dropForeign(relation.field);
          })
        );
      }
    }
  }

  for (const entity of schema.entities) {
    await db.schema.dropTableIfExists(entity.name);
  }

  await db.schema.dropTableIfExists("sync");
  await db.schema.dropTableIfExists("_clientdb");
}
