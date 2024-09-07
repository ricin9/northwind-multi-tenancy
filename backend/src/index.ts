import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";

import { v1 } from "./routes/v1";
import { errorHandler } from "./lib/util/global-error-handler";
import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";
import { openApiInfo } from "./openapi-info";
import type { Variables } from "./lib/types/context-variables";
import { authenticationMiddleware } from "./lib/middleware/authentication";
import { initCentralDb, initTenantDb } from "./lib/middleware/init-db";

const app = new OpenAPIHono<{ Variables: Variables }>().basePath("/api");

/* global middleware */
app.use(logger());
app.use(cors());
app.use(secureHeaders());

app.use(initCentralDb);
app.use(authenticationMiddleware);
app.use(initTenantDb);

/* error handling */
app.onError(errorHandler);

/* openapi */
app.doc("/doc", openApiInfo);

app.get(
  "/",
  apiReference({
    spec: { url: "/api/doc" },
    pageTitle: "Northwind API Reference",
  })
);

/* routes */
const routes = app.route("/v1", v1);

/* for hono RPC */
export type AppType = typeof routes;

export const api = app;

export default app;
