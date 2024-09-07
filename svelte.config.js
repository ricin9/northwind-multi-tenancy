import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $api: "backend/src",
    },
    files: {
      appTemplate: "frontend/src/app.html",
      lib: "frontend/src/lib",
      routes: "frontend/src/routes",
      serviceWorker: "frontend/src/service-worker",
      assets: "frontend/static",
      errorTemplate: "frontend/src/error.html",
      hooks: {
        client: "frontend/src/hooks.client",
        server: "frontend/src/hooks.server",
        universal: "frontend/src/hooks",
      },
      params: "frontend/src/params",
    },
  },
};

export default config;
