import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../../lib/types/context-variables";
export declare const accountsGroup: OpenAPIHono<{
    Variables: Variables;
}, {
    "/login": {
        $post: {
            input: {
                json: {
                    username: string;
                    password: string;
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                json: {
                    username: string;
                    password: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 201;
        };
    };
} & {
    "/logout": {
        $post: {
            input: {};
            output: {};
            outputFormat: string;
            status: 201;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    companyName: string;
                    companySubdomain: string;
                    username: string;
                    password: string;
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                json: {
                    companyName: string;
                    companySubdomain: string;
                    username: string;
                    password: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 409;
        } | {
            input: {
                json: {
                    companyName: string;
                    companySubdomain: string;
                    username: string;
                    password: string;
                };
            };
            output: {
                companyName: string;
                companyId: number;
                companySubdomain: string;
                userId: number;
                username: string;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
}, "/">;
