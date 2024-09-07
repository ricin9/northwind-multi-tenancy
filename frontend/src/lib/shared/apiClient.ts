import { type AppType } from "$api";
import { hc } from "hono/client";

let browserClient: ReturnType<typeof hc<AppType>>;

export const makeClient = (fetch: Window["fetch"]) => {
  const isBrowser = typeof window !== "undefined";
  const origin = isBrowser ? window.location.origin : "";

  if (isBrowser && browserClient) {
    return browserClient;
  }

  const client = hc<AppType>(origin + "/api", { fetch });

  if (isBrowser) {
    browserClient = client;
  }

  return client;
};
