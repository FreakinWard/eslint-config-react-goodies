describe('react', () => {
  it('should return expected rules', () => {
    // arrange
    const expectedRules = {
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    };

    // act
    const rules = require('../react');

    // assert
    expect(rules).toEqual(expectedRules);
  });
});
