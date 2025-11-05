const js = require("@eslint/js");
const globals = require("globals");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    },
  },
];
