describe('react', () => {
  it('should return expected rules', () => {
    // arrange
    const expectedRules = {
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
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
    const rules = require('../react');

    // assert
    expect(rules).toEqual(expectedRules);
  });
});
