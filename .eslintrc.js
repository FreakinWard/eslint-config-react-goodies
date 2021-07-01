module.exports = {
  root: true, // Make sure eslint picks up the configs at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true,
  },
  plugins: ['simple-import-sort', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended', // Make this the last element so prettier configs overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': 'error', // Use our prettier.configs.js file as source
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
