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
        './src/base',
        './src/react',
        './src/a11y',
        './src/jest',
        './src/prettier',
      ],
    };

    // act
    const plugin = require('../index');

    // assert
    expect(plugin).toEqual(expectedConfig);
  });
});
