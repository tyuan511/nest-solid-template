module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['solid', 'prettier'],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/typescript',
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
