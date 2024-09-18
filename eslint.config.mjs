import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default {
  files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: tsParser,
    globals: {
      ...globals.browser, // Enable browser globals like `console`
      ...globals.node, // Enable Node.js globals like `process`
    },
  },
  plugins: {
    react,
    "@typescript-eslint": tseslint,
  },
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["snake_case"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "space-before-blocks": ["error", "always"], // Ensure space before blocks
    "lines-between-class-members": ["error", "always"], // Enforce spacing between class methods
    "no-unused-vars": "error", // Disallow unused variables
    "multiline-comment-style": ["error", "starred-block"], // Enforce JSDoc style comments
    semi: ["error", "always"], // Ensure semicolons are used
    quotes: ["error", "double"], // Double quote strings
    "react/prop-types": "off", // Turn off prop-types for React if you're using TypeScript
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
};
