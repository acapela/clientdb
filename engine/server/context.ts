import { DbSchema } from "../schema/schema";

export interface SyncRequestContext {
  userId: string | null;
  lastSyncId: number | null;
  schema: DbSchema;
  connector: any;
}