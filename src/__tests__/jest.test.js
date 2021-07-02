describe('jest', () => {
  it('should return expected rules', () => {
    // arrange
    const expectedRules = {
      extends: ['plugin:jest/style'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    };

    // act
    const rules = require('../jest');

    // assert
    expect(rules).toEqual(expectedRules);
  });
});
