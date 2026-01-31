import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://arailandscaping.com",
	integrations: [tailwind()],
	output: "static",
	build: {
		format: "file",
	},
	trailingSlash: "never",
});
