import { z } from "@hono/zod-openapi";
export const idParamSchema = z.object({
    id: z.string().pipe(z.coerce.number().min(1))
});
export const idStringParamSchema = z.object({
    id: z.string().min(1)
});
export function insureOneProperty(zodObj) {
    const schema = zodObj;
    schema.refine((obj)=>Object.keys(obj).length > 0, "at least one property must be defined");
    return schema;
}
