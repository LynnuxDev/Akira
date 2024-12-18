import eslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": eslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    ignores: [
      "*/node_modules/*",
      "*dist/**/*.d.ts",
      "./.github/*"
    ],
    files: [
      "**/*.ts"
    ],
    rules: {
      semi: "error",
      "prefer-const": "error"
    }
  }
];