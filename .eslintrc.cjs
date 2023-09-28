module.exports = {
    extends: ['airbnb', 'airbnb-typescript'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': 0,
      'react/function-component-definition': 0,
      'import/prefer-default-export': 0,
      'react/jsx-props-no-spreading': 0,
      'comma-dangle': 0,
      '@typescript-eslint/comma-dangle': 0,
      'radix': 0
    },
    ignorePatterns: ["**/*.js","**/*.cjs","**/*.json","**/*.md","**/*.sh","**/*.yml"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      tsconfigRootDir: __dirname,
      project:[ "./tsconfig.json"]
    },
  };
  