describe('prettier', () => {
  it('should return expected rules', () => {
    // arrange
    const expectedRules = {
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            printWidth: 120,
            singleQuote: true,
            arrowParens: 'avoid',
          },
        ],
      },
    };

    // act
    const rules = require('../prettier');

    // assert
    expect(rules).toEqual(expectedRules);
  });
});
