import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["src/**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,mdx,vue,astro}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "valid-typeof": "warn",
      "prefer-const": "warn",
      "prefer-spread": "warn",
      "prefer-rest-params": "warn",
      "no-case-declarations": "warn",
      "no-cond-assign": "warn",
      "no-constant-condition": "warn",
      "no-control-regex": "warn",
      "no-empty": "warn",
      "no-fallthrough": "warn",
      "no-misleading-character-class": "warn",
      "no-prototype-builtins": "warn",
      "no-undef": "warn",
      "no-unused-vars": "warn",
      "no-useless-escape": "warn",
      "no-var": "warn",
    },
    ignores: [
      ".env",
      ".mypy_cache/**/*",
      "__pycache__/**/*",
      "build/**/*",
      "dist/**/*",
      "node_modules/**/*",
      "public/**/*",
      "src/styles/tailwind.css",
    ],
  },
];
