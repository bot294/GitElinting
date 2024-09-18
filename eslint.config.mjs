import globals from "globals";
//import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default {
  files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: tsParser,
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    react,
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
        format: ["snake_case", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "space-before-blocks": ["error", "always"],
    "lines-between-class-members": ["error", "always"],
    "no-unused-vars": "error",
    "multiline-comment-style": ["error", "starred-block"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
