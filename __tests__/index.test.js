describe('index', () => {
  it('should return expected rules', () => {
    // arrange
    // TODO: is there a way to avoid duplicate rules here?
    const expectedRules = {
      'prettier/prettier': 'error', // Use our prettier.config.js file as source
    };

    // act
    const plugin = require('../index');

    // assert
    expect(plugin.rules).toEqual(expectedRules);
  });
});
