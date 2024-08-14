import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import { loadEnv } from "vite";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2024-08-13",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],
  output: "server",
});
