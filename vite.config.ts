import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@assets": "/src/assets",
			"@components": "/src/components",
			"@containers": "/src/containers",
			"@controllers": "/src/controllers",
			"@hooks": "/src/hooks",
			"@interfaces": "/src/interfaces",
			"@models": "/src/models",
			"@services": "/src/services",
			"@stores": "/src/stores",
			"@styles": "/src/styles",
			types: "/src/types",
			"@utils": "/src/utils",
			"@views": "/src/views",
		},
	},
});
