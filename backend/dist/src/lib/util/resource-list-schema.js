import { z } from "@hono/zod-openapi";
import { metadataSchema } from "./paginationMetadata";
import { createSelectSchema } from "drizzle-zod";
export const resourceListSchema = (table)=>z.object({
        metadata: metadataSchema,
        data: z.array(createSelectSchema(table).partial())
    });
