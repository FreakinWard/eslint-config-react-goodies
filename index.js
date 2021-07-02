module.exports = {
  root: true, // Make sure eslint picks up the configs at the root of the directory
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
    './src/base',
    './src/react',
    './src/a11y',
    './src/jest',
    './src/prettier', // Make this the last element so prettier src overrides other formatting rules
  ],
};
