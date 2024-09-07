import type { Variables } from "../types/context-variables";
export declare const initDb: import("hono").MiddlewareHandler<{
    Variables: Variables;
}, string, {}>;
