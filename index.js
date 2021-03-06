module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true,
  },
  plugins: ['simple-import-sort', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    './config/rules/react',
    './config/rules/jest',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'import/prefer-default-export': 'error',
    'prettier/prettier': 'error', // Use our prettier.config.js file as source
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
