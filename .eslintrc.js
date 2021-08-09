module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": 1,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "never",
      },
    ],
    "react/jsx-one-expression-per-line": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "no-param-reassign": 0,
    "operator-linebreak": 0,
    "no-use-before-define": 0,
    "no-console": 0,
    "arrow-body-style": 0,
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "react/prop-types": 0,
    "react/no-unknown-property": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": 0,
    camelcase: 0,
  },
};
