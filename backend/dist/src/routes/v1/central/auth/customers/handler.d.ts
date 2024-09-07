import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../../lib/types/context-variables";
export declare const customersGroup: OpenAPIHono<{
    Variables: Variables;
}, {
    "/": {
        $get: {
            input: any;
            output: any;
            outputFormat: any;
            status: 200;
        } | {
            input: any;
            output: {};
            outputFormat: any;
            status: 400;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: any;
            };
            output: {};
            outputFormat: string;
            status: 400;
        } | {
            input: {
                json: any;
            };
            output: {
                customerId: string;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
} & {
    "/:id": {
        $get: {
            input: any;
            output: {};
            outputFormat: any;
            status: 400;
        } | {
            input: any;
            output: {};
            outputFormat: any;
            status: 404;
        } | {
            input: any;
            output: {
                [x: string]: any;
            };
            outputFormat: any;
            status: 200;
        };
    };
} & {
    "/:id": {
        $patch: {
            input: any;
            output: {};
            outputFormat: any;
            status: 400;
        } | {
            input: any;
            output: {};
            outputFormat: any;
            status: 404;
        } | {
            input: any;
            output: {
                [x: string]: any;
            };
            outputFormat: any;
            status: 200;
        };
    };
}, "/">;
