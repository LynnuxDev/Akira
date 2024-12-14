export default [
  {
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