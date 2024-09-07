import type { Variables } from "../types/context-variables";
export declare const authenticationMiddleware: import("hono").MiddlewareHandler<{
    Variables: Variables;
}, string, {}>;
