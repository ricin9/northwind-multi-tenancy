import { z } from "@hono/zod-openapi";
import { ZodObject, type ZodRawShape } from "zod";
export declare const idParamSchema: z.ZodObject<{
    id: z.ZodPipeline<z.ZodString, z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: string;
}>;
export declare const idStringParamSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare function insureOneProperty<T extends ZodObject<ZodRawShape>>(zodObj: T): T;
