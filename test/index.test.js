const dontAskWhy = require('../lib/index');

describe('don\'t ask why', () => {
  const words = ['sunny', 'raining', 'cold', 'windy'];
  it('takes an array of words and modifies it', () => {
    const result = dontAskWhy(words);
    const expected = ['Is it raining?', 'Is it cold?'];
    expect(result).toEqual(expected);
  });
});
