import { z } from "@hono/zod-openapi";
export declare const ZodHttpErrorSchema: z.ZodOptional<z.ZodObject<{
    success: z.ZodOptional<z.ZodLiteral<false>>;
    error: z.ZodOptional<z.ZodObject<{
        issues: z.ZodArray<z.ZodObject<{
            received: z.ZodString;
            code: z.ZodEnum<[string, ...string[]]>;
            path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            path: (string | number)[];
            message: string;
            received: string;
        }, {
            code: string;
            path: (string | number)[];
            message: string;
            received: string;
        }>, "many">;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        issues: {
            code: string;
            path: (string | number)[];
            message: string;
            received: string;
        }[];
    }, {
        name: string;
        issues: {
            code: string;
            path: (string | number)[];
            message: string;
            received: string;
        }[];
    }>>;
}, "strip", z.ZodTypeAny, {
    success?: false | undefined;
    error?: {
        name: string;
        issues: {
            code: string;
            path: (string | number)[];
            message: string;
            received: string;
        }[];
    } | undefined;
}, {
    success?: false | undefined;
    error?: {
        name: string;
        issues: {
            code: string;
            path: (string | number)[];
            message: string;
            received: string;
        }[];
    } | undefined;
}>>;
export declare const ZodBadRequestOpenApi: {
    description: string;
    content: {
        "application/json": {
            schema: z.ZodOptional<z.ZodObject<{
                success: z.ZodOptional<z.ZodLiteral<false>>;
                error: z.ZodOptional<z.ZodObject<{
                    issues: z.ZodArray<z.ZodObject<{
                        received: z.ZodString;
                        code: z.ZodEnum<[string, ...string[]]>;
                        path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        code: string;
                        path: (string | number)[];
                        message: string;
                        received: string;
                    }, {
                        code: string;
                        path: (string | number)[];
                        message: string;
                        received: string;
                    }>, "many">;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message: string;
                        received: string;
                    }[];
                }, {
                    name: string;
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message: string;
                        received: string;
                    }[];
                }>>;
            }, "strip", z.ZodTypeAny, {
                success?: false | undefined;
                error?: {
                    name: string;
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message: string;
                        received: string;
                    }[];
                } | undefined;
            }, {
                success?: false | undefined;
                error?: {
                    name: string;
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message: string;
                        received: string;
                    }[];
                } | undefined;
            }>>;
        };
    };
};
