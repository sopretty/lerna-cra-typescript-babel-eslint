module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'sort-keys': [
      'error',
      'asc',
      {caseSensitive: true, natural: false, minKeys: 2},
    ],
    // Type is enforced by callers. Not entirely, but it's good enough.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Temp fix for import.
    // https://github.com/benmosher/eslint-plugin-import/issues/1285#issuecomment-466212438
    'import/named': 'off',
    // Enforce arrow functions only is afaik not possible. But this helps.
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    // Fix for TypeScript.
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
    // Fix for TypeScript.
    'react/no-danger': 'off',
    // I believe shadowing is a nice language feature.
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    // Because React Native in packages/web is replaced with React Native Web.
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    // We have types.
    'react/prop-types': 'off',
    // It's fine.
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    // They are fine sometimes.
    'no-nested-ternary': 'off',
    // This is fine.
    'lines-between-class-members': 'off',
    // We use it for immer. It should be checked by readonly anyway.
    'no-param-reassign': 'off',
    // Irrelevant.
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'consistent-return': 'off',
    // TSC checks it.
    '@typescript-eslint/no-unused-vars': 'off',
    'no-undef': 'off',
    'react/jsx-no-undef': 'off',
    // React Hooks.
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Reconsider, maybe enable later:
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react/destructuring-assignment': 'off',
    // We are using spreading mainly for JSS props
    'react/jsx-props-no-spreading': 'off',
    // Enable few exceptions
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    // Sometimes the backend send us snake case keys
    '@typescript-eslint/camelcase': 'off',
    camelcase: 'off',
  },
};
