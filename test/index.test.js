const dontAskWhy = require('../lib/index');

describe('don\'t ask why', () => {
  it('takes an array of words and modifies it', () => {
    const words = ['sunny', 'raining', 'cold', 'windy'];
    const result = dontAskWhy(words);
    const expected = ['Is it raining?', 'Is it cold?'];
    expect(result).toEqual(expected);
  });
  it('takes another array of words which all contain y and returns an empty array', () => {
    const words = ['funny', 'HAPPY', 'silly'];
    const result = dontAskWhy(words);
    const expected = [];
    expect(result).toEqual(expected);
  });
  it('takes an array of strings and modifies it', () => {
    const words = ['tired', 'grumpy', 'UPSET WITH ME', 'GOING TO LEAVE', 'UGLY'];
    const result = dontAskWhy(words);
    const expected = ['Is it tired?', 'Is it UPSET WITH ME?', 'Is it GOING TO LEAVE?'];
    expect(result).toEqual(expected);
  });
});
