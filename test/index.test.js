const dontAskY = require('../lib/index');

describe('dontAskY', () => {
  it('Removes any words that contain "y" or "Y" and then makes the question "Is it <word>?" with the remaining words', () => {
    const expected = ['Is it hot?', 'Is it green?'];
    const input = ['sky', 'hot', 'Yeti', 'green'];
    const result = dontAskY(input);

    expect(result).toEqual(expected);
  });
});
