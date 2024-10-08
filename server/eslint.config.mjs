import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import js from "@eslint/js";
import globals from "globals";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Resolve file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FlatCompat to bridge with older-style configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends("eslint:recommended"), // Use recommended ESLint rules
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 2021, // Support modern ECMAScript features
        sourceType: "module", // Use ECMAScript modules
      },
    },
    rules: {
      "no-console": "warn", // Warn on console usage
      eqeqeq: "error", // Enforce strict equality
      "prettier/prettier": "error", // Integrate Prettier for formatting
    },
  },
];
