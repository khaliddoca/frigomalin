import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	base: "/frigomalin/",
	plugins: [
		vue(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["frigo.svg"],
			manifest: {
				name: "FrigoMalin",
				short_name: "FrigoMalin",
				description: "Inventaire local et suivi des dates du foyer.",
				theme_color: "#315c4b",
				background_color: "#f7f7f2",
				display: "standalone",
				start_url: "/frigomalin/",
				scope: "/frigomalin/",
				icons: [
					{
						src: "frigo.svg",
						sizes: "any",
						type: "image/svg+xml",
						purpose: "any",
					},
				],
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,svg,ico,png,webp}"],
			},
		}),
	],
	test: {
		environment: "node",
		include: ["src/**/*.test.ts"],
	},
});
