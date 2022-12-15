module.exports = {
  env: {
    "browser" : true,
    "node"    : true,
    "es6"     : true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true
    },
    ecmaVersion : 2018,
    sourceType  : "module"
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  rules: {
    "camelcase"                   : "off",                                                   // supported by typescript
    "no-undef"                    : "off",                                                   // supported by typescript
    "no-plusplus"                 : "off",
    "no-multi-spaces"             : "off",
    "no-nested-ternary"           : "off",
    "no-unused-vars"              : "off",                                                   // supported by typescript
    "no-trailing-spaces"          : "off",
    "no-unused-expressions"       : "off",
    "key-spacing"                 : "off",
    "object-curly-newline"        : "off",
    "lines-between-class-members" : ["error", "always", { "exceptAfterSingleLine": true }],
    "indent"                      : "off",                                                   // supported by typescript

    "import/extensions"            : "off",
    "import/no-unresolved"         : "off",
    "import/prefer-default-export" : "off",
    "import/no-default-export"     : "off",

    "@typescript-eslint/camelcase"                     : "off",
    // "@typescript-eslint/indent"                        : ["error", 2],
    "@typescript-eslint/no-explicit-any"               : "off",
    "@typescript-eslint/type-annotation-spacing"       : "off",
    "@typescript-eslint/explicit-function-return-type" : 2,
    "@typescript-eslint/explicit-member-accessibility" : "off",
    "@typescript-eslint/no-empty-interface"            : "off",
    "@typescript-eslint/no-unused-vars"                : ["error", { "ignoreRestSiblings": true }],

    "react/prop-types"                     : "off",
    "react/no-array-index-key"             : "off",
    "react/jsx-equals-spacing"             : "off",
    "react/jsx-filename-extension"         : ["error", { "extensions": [".ts", ".tsx"] }],
    // "react/jsx-wrap-multilines"            : ["error", { "declaration": "parens-new-line" }],
    "react/sort-comp"                      : "off",
    "react/require-default-props"          : "off",
    "react/default-props-match-prop-types" : "off",
    "react/destructuring-assignment"       : "off",
    "react/jsx-one-expression-per-line"    : "off",
    "react/jsx-no-duplicate-props"         : ["error", { "ignoreCase": false }],
    "react-hooks/rules-of-hooks"           : "error",
    "react-hooks/exhaustive-deps"          : "warn",
    "react/jsx-props-no-spreading"         : ["warn", {
      "html"   : "enforce",
      "custom" : "ignore",
      // "explicitSpread": "ignore" | "enforce",
      // "exceptions": [<string>]
    }],

    // "comma-dangle"                                    : ["error", "only-multiline"],
    "implicit-arrow-linebreak"                        : "off",
    "jsx-a11y/click-events-have-key-events"           : "off",
    "jsx-a11y/no-static-element-interactions"         : "off",
    "jsx-a11y/no-noninteractive-element-interactions" : "off",

    'no-console'  : "off",
    "no-debugger" : "error",
  }
};
