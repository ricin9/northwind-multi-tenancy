import { z } from "@hono/zod-openapi";
export declare const list: {
    method: "get";
    path: "/";
    tags: string[];
    summary: string;
    description: string;
    request: {
        query: any;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: any;
                };
            };
        };
        400: any;
    };
} & {
    getRoutingPath(): "/";
};
export declare const create: {
    method: "post";
    path: "/";
    tags: string[];
    summary: string;
    request: {
        body: {
            content: {
                "application/json": {
                    schema: any;
                };
            };
        };
    };
    responses: {
        201: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        customerId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        customerId: string;
                    }, {
                        customerId: string;
                    }>;
                };
            };
        };
        400: any;
    };
} & {
    getRoutingPath(): "/";
};
export declare const get: {
    method: "get";
    path: "/{id}";
    tags: string[];
    summary: string;
    request: {
        params: any;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        [x: string]: z.ZodOptional<any>;
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        [x: string]: any;
                    }, {
                        [x: string]: any;
                    }>;
                };
            };
        };
        400: any;
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const update: {
    method: "patch";
    path: "/{id}";
    tags: string[];
    summary: string;
    request: {
        params: any;
        body: {
            content: {
                "application/json": {
                    schema: any;
                };
            };
        };
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        [x: string]: z.ZodOptional<any>;
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        [x: string]: any;
                    }, {
                        [x: string]: any;
                    }>;
                };
            };
        };
        400: any;
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:id";
};
