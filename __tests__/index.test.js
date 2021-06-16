describe('index', () => {
  it('should return expected rules', () => {
    // arrange
    // TODO: is there a way to avoid duplicate rules here?
    const expectedRules = {
      'import/prefer-default-export': 'error',
    };

    // act
    const plugin = require('../index');

    // assert
    expect(plugin.rules).toEqual(expectedRules);
  });
});
