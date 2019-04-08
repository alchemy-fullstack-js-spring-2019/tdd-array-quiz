const filterY = require('../lib/index');

describe('', () => {
  it('returns an array of words that DO NOT contain the letter `y` or `Y`', () => {
    const arrayIn = ['apple', 'banana', 'yogurt', 'kiwi', 'YELLOW'];
    const arrayOut = ['apple', 'banana', 'kiwi'];
    expect(filterY(arrayIn)).toEqual(arrayOut);
  });
});
