import eslint from "@eslint/js";
import globals from "globals";
import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["dist/**", "coverage/**", "node_modules/**"],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...vue.configs["flat/recommended"],
	{
		files: ["**/*.{ts,vue}"],
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".vue"],
			},
		},
	},
	{
		files: ["**/*.config.js", "eslint.config.js"],
		languageOptions: {
			globals: globals.node,
		},
	},
);