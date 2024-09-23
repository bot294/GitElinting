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
    // TypeScript ESLint naming conventions for MONITAIR
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
      {
        selector: "enumMember",
        format: ["UPPER_CASE"], // Enforce capitalized enums
      },
    ],

    // Code formatting and structure
    "space-before-blocks": ["error", "always"],
    "lines-between-class-members": ["error", "always"],
    "no-unused-vars": "error",
    "multiline-comment-style": ["error", "starred-block"], // Ensure JSDoc style comments
    "capitalized-comments": [
      "error",
      "always",
      {
        ignoreConsecutiveComments: true,
        ignorePattern: "pragma|ignored",
      },
    ],
    semi: ["error", "always"],
    quotes: ["error", "double"], // Ensure double quotes for strings
    "react/prop-types": "off",

    // Custom rules for MONITAIR coding standards
    "no-inline-comments": "error", // Disable inline comments to enforce JSDoc usage
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { code: 100 }], // Max line length of 100 characters
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "import", next: "*" }, // Ensure blank line after imports
      { blankLine: "always", prev: "*", next: "export" }, // Ensure blank line before exports
    ],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ], // Enforce JSDoc comments for functions and methods
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
