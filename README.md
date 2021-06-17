eslint-config-react-goodies
============================

# Getting Started
`eslint-config-react-goodies` reduces time to stand up and configure a react or nextjs app.

# Create eslint config

To start, simply configure eslint to extend from `react-goodies`, for example

```javascript
// .eslintrc.js
module.exports = {
    extends: ['react-goodies'],
};

```

The configuration can be customized like any other eslint configuration. Typescript is configured, for example:

```javascript
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'react-goodies',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
    },
};
```