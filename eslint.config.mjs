import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "lines-between-class-members": "error",
      "arrow-parens": "error",
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  eslintConfigPrettier,
]);
