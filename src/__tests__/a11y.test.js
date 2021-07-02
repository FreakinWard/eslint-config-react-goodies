describe('a11y', () => {
  it('should return expected rules', () => {
    // arrange
    const expectedRules = {
      extends: ['plugin:jsx-a11y/recommended'],
      rules: {
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    };

    // act
    const rules = require('../a11y');

    // assert
    expect(rules).toEqual(expectedRules);
  });
});
