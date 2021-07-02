describe('index', () => {
  it('should return expected src', () => {
    // arrange
    const expectedConfig = {
      root: true,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      env: {
        node: true,
        jest: true,
      },
      plugins: ['simple-import-sort', 'prettier', 'import'],
      extends: [
        'eslint:recommended',
        './src/prettier',
        './src/react',
        './src/a11y',
        './src/jest',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/prefer-default-export': 'error',
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
      },
    };

    // act
    const plugin = require('../index');

    // assert
    expect(plugin).toEqual(expectedConfig);
  });
});
