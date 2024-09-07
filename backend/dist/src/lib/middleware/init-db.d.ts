import type { Variables } from "../types/context-variables";
export declare const initCentralDb: import("hono").MiddlewareHandler<any, string, {}>;
export declare const initTenantDb: import("hono").MiddlewareHandler<{
    Variables: Variables;
}, string, {}>;
