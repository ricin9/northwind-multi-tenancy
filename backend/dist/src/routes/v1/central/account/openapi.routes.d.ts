import { z } from "@hono/zod-openapi";
export declare const login: {
    method: "post";
    path: "/login";
    tags: string[];
    summary: string;
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        username: z.ZodString;
                        password: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        username: string;
                        password: string;
                    }, {
                        username: string;
                        password: string;
                    }>;
                };
            };
        };
    };
    responses: {
        201: {
            description: string;
        };
        400: {
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
    };
} & {
    getRoutingPath(): "/login";
};
export declare const logout: {
    method: "post";
    path: "/logout";
    tags: string[];
    summary: string;
    responses: {
        201: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/logout";
};
export declare const create: {
    method: "post";
    path: "/";
    tags: string[];
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<z.objectUtil.extendShape<{
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
                };
            };
        };
    };
    responses: {
        201: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<z.objectUtil.extendShape<Omit<z.objectUtil.extendShape<{
                        username: z.ZodString;
                        password: z.ZodString;
                    }, Omit<{
                        companyName: z.ZodString;
                        companyId: z.ZodOptional<z.ZodNumber>;
                        companySubdomain: z.ZodString;
                        createdAt: z.ZodOptional<z.ZodString>;
                    }, "companyId" | "createdAt">>, "password">, {
                        companyId: z.ZodNumber;
                        userId: z.ZodNumber;
                    }>, "strip", z.ZodTypeAny, {
                        companyName: string;
                        companyId: number;
                        companySubdomain: string;
                        userId: number;
                        username: string;
                    }, {
                        companyName: string;
                        companyId: number;
                        companySubdomain: string;
                        userId: number;
                        username: string;
                    }>;
                };
            };
        };
        400: {
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
        409: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/";
};
