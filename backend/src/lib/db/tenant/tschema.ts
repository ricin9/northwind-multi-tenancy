import * as tenantSchema from "./schema";
import * as tenantRelations from "./relations";

export const tenantTSchema = { ...tenantSchema, ...tenantRelations };
