import { z } from "@hono/zod-openapi";
export declare const loginUserSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const createCompanySchema: z.ZodObject<z.objectUtil.extendShape<{
    username: z.ZodString;
    password: z.ZodString;
}, Omit<{
    companyName: z.ZodString;
    companyId: z.ZodOptional<z.ZodNumber>;
    companySubdomain: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
}, "companyId" | "createdAt">>, z.UnknownKeysParam, z.ZodTypeAny, {
    companyName: string;
    companySubdomain: string;
    username: string;
    password: string;
}, {
    companyName: string;
    companySubdomain: string;
    username: string;
    password: string;
}>;
