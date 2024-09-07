export declare const list: {
    method: "get";
    path: "/{orderId}/details";
    tags: string[];
    summary: string;
    request: {
        params: import("zod").ZodObject<{
            orderId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            orderId: number;
        }, {
            orderId: string;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodArray<import("zod").ZodObject<{
                        orderId: import("zod").ZodOptional<import("zod").ZodNumber>;
                        productId: import("zod").ZodOptional<import("zod").ZodNumber>;
                        unitPrice: import("zod").ZodOptional<import("zod").ZodString>;
                        quantity: import("zod").ZodOptional<import("zod").ZodNumber>;
                        discount: import("zod").ZodOptional<import("zod").ZodNumber>;
                        product: import("zod").ZodOptional<import("zod").ZodObject<Pick<{
                            productId: import("zod").ZodOptional<import("zod").ZodNumber>;
                            productName: import("zod").ZodOptional<import("zod").ZodString>;
                            supplierId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            categoryId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            quantityPerUnit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                            unitPrice: import("zod").ZodOptional<import("zod").ZodString>;
                            unitsInStock: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            unitsOnOrder: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            reorderLevel: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            discontinued: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "productId" | "productName">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        }, {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        }>>;
                    }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                        orderId?: number | undefined;
                        productId?: number | undefined;
                        unitPrice?: string | undefined;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                        product?: {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        } | undefined;
                    }, {
                        orderId?: number | undefined;
                        productId?: number | undefined;
                        unitPrice?: string | undefined;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                        product?: {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        } | undefined;
                    }>, "many">;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodOptional<import("zod").ZodObject<{
                        success: import("zod").ZodOptional<import("zod").ZodLiteral<false>>;
                        error: import("zod").ZodOptional<import("zod").ZodObject<{
                            issues: import("zod").ZodArray<import("zod").ZodObject<{
                                received: import("zod").ZodString;
                                code: import("zod").ZodEnum<[string, ...string[]]>;
                                path: import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>, "many">;
                                message: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
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
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:orderId/details";
};
export declare const get: {
    method: "get";
    path: "/{orderId}/details/{productId}";
    tags: string[];
    summary: string;
    request: {
        params: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            orderId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }, {
            productId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }>, "strip", import("zod").ZodTypeAny, {
            orderId: number;
            productId: number;
        }, {
            orderId: string;
            productId: string;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodObject<{
                        orderId: import("zod").ZodOptional<import("zod").ZodNumber>;
                        productId: import("zod").ZodOptional<import("zod").ZodNumber>;
                        unitPrice: import("zod").ZodOptional<import("zod").ZodString>;
                        quantity: import("zod").ZodOptional<import("zod").ZodNumber>;
                        discount: import("zod").ZodOptional<import("zod").ZodNumber>;
                        product: import("zod").ZodOptional<import("zod").ZodObject<Pick<{
                            productId: import("zod").ZodOptional<import("zod").ZodNumber>;
                            productName: import("zod").ZodOptional<import("zod").ZodString>;
                            supplierId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            categoryId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            quantityPerUnit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                            unitPrice: import("zod").ZodOptional<import("zod").ZodString>;
                            unitsInStock: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            unitsOnOrder: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            reorderLevel: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            discontinued: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "productId" | "productName">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        }, {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        }>>;
                    }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                        orderId?: number | undefined;
                        productId?: number | undefined;
                        unitPrice?: string | undefined;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                        product?: {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        } | undefined;
                    }, {
                        orderId?: number | undefined;
                        productId?: number | undefined;
                        unitPrice?: string | undefined;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                        product?: {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        } | undefined;
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodOptional<import("zod").ZodObject<{
                        success: import("zod").ZodOptional<import("zod").ZodLiteral<false>>;
                        error: import("zod").ZodOptional<import("zod").ZodObject<{
                            issues: import("zod").ZodArray<import("zod").ZodObject<{
                                received: import("zod").ZodString;
                                code: import("zod").ZodEnum<[string, ...string[]]>;
                                path: import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>, "many">;
                                message: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
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
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:orderId/details/:productId";
};
export declare const put: {
    method: "put";
    path: "/{orderId}/details/{productId}";
    tags: string[];
    summary: string;
    request: {
        params: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            orderId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }, {
            productId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }>, "strip", import("zod").ZodTypeAny, {
            orderId: number;
            productId: number;
        }, {
            orderId: string;
            productId: string;
        }>;
        body: {
            content: {
                "application/json": {
                    schema: import("zod").ZodObject<Omit<import("zod").objectUtil.extendShape<{
                        orderId: import("zod").ZodNumber;
                        productId: import("zod").ZodNumber;
                        unitPrice: import("zod").ZodString;
                        quantity: import("zod").ZodOptional<import("zod").ZodNumber>;
                        discount: import("zod").ZodOptional<import("zod").ZodNumber>;
                    }, {
                        unitPrice: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                        quantity: import("zod").ZodDefault<import("zod").ZodNumber>;
                        discount: import("zod").ZodDefault<import("zod").ZodNumber>;
                    }>, "orderId">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                        productId: number;
                        unitPrice: string;
                        quantity: number;
                        discount: number;
                    }, {
                        productId: number;
                        unitPrice: string;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                    }>;
                };
            };
        };
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodObject<{
                        orderId: import("zod").ZodOptional<import("zod").ZodNumber>;
                        productId: import("zod").ZodOptional<import("zod").ZodNumber>;
                        unitPrice: import("zod").ZodOptional<import("zod").ZodString>;
                        quantity: import("zod").ZodOptional<import("zod").ZodNumber>;
                        discount: import("zod").ZodOptional<import("zod").ZodNumber>;
                        product: import("zod").ZodOptional<import("zod").ZodObject<Pick<{
                            productId: import("zod").ZodOptional<import("zod").ZodNumber>;
                            productName: import("zod").ZodOptional<import("zod").ZodString>;
                            supplierId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            categoryId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            quantityPerUnit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                            unitPrice: import("zod").ZodOptional<import("zod").ZodString>;
                            unitsInStock: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            unitsOnOrder: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            reorderLevel: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            discontinued: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "productId" | "productName">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        }, {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        }>>;
                    }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                        orderId?: number | undefined;
                        productId?: number | undefined;
                        unitPrice?: string | undefined;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                        product?: {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        } | undefined;
                    }, {
                        orderId?: number | undefined;
                        productId?: number | undefined;
                        unitPrice?: string | undefined;
                        quantity?: number | undefined;
                        discount?: number | undefined;
                        product?: {
                            productId?: number | undefined;
                            productName?: string | undefined;
                        } | undefined;
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodOptional<import("zod").ZodObject<{
                        success: import("zod").ZodOptional<import("zod").ZodLiteral<false>>;
                        error: import("zod").ZodOptional<import("zod").ZodObject<{
                            issues: import("zod").ZodArray<import("zod").ZodObject<{
                                received: import("zod").ZodString;
                                code: import("zod").ZodEnum<[string, ...string[]]>;
                                path: import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>, "many">;
                                message: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
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
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:orderId/details/:productId";
};
export declare const del: {
    method: "delete";
    path: "/{orderId}/details/{productId}";
    tags: string[];
    summary: string;
    request: {
        params: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            orderId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }, {
            productId: import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodNumber>;
        }>, "strip", import("zod").ZodTypeAny, {
            orderId: number;
            productId: number;
        }, {
            orderId: string;
            productId: string;
        }>;
    };
    responses: {
        204: {
            description: string;
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: import("zod").ZodOptional<import("zod").ZodObject<{
                        success: import("zod").ZodOptional<import("zod").ZodLiteral<false>>;
                        error: import("zod").ZodOptional<import("zod").ZodObject<{
                            issues: import("zod").ZodArray<import("zod").ZodObject<{
                                received: import("zod").ZodString;
                                code: import("zod").ZodEnum<[string, ...string[]]>;
                                path: import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>, "many">;
                                message: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
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
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:orderId/details/:productId";
};
