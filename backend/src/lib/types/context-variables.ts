import { LibSQLDatabase } from "drizzle-orm/libsql";
import { tenantTSchema } from "../db/tenant/tschema";
import { centralTSchema } from "../db/central/tschema";

export type Variables = {
  tenantDb: LibSQLDatabase<typeof tenantTSchema> | null;
  centralDb: LibSQLDatabase<typeof centralTSchema>;
  User: {
    userId: number;
    companyId: number;
    companySubdomain: string;
  } | null;
};
