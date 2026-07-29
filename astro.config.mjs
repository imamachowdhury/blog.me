import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || "https://blog.imamahmed.net",
  build: { format: "directory" },
});
