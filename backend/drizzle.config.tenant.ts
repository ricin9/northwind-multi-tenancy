import type { Config } from "@libsql/client";
import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

const databaseUrlConfig: Config = {
  url: `libsql://${process.env.TURSO_SCHEMA_DATABASE_NAME!}-${process.env
    .TURSO_ORGANIZATION_NAME!}.turso.io`,
  authToken: process.env.TURSO_GROUP_AUTH_TOKEN!,
};
export default defineConfig({
  schema: ["./src/lib/db/tenant/schema.ts", "./src/lib/db/tenant/relations.ts"],
  out: "drizzle/tenant",
  dialect: "sqlite",
  dbCredentials: databaseUrlConfig,
  driver: "turso",
});
