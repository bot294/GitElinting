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
      ...globals.browser,
      ...globals.node,
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

    // Custom rules for MONITAIR project coding standards
    "no-inline-comments": "off", // Ensure comments follow JS Doc style
    "capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }], // Capitalize comments
    "array-bracket-spacing": ["error", "never"], // Ensure no spacing in array brackets
    "object-curly-spacing": ["error", "always"], // Ensure spacing inside object brackets
    "max-len": ["error", { code: 100 }], // Enforce max line length
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "block-like", next: "*" },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
