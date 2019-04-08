const dontAskY = require('../lib/index');

describe('dontAskY', () => {
  it('Removes "sky" and "Yeti" and then returns "Is it hot?" and "Is it green?" in an array', () => {
    const expected = ['Is it hot?', 'Is it green?'];
    const input = ['sky', 'hot', 'Yeti', 'green'];
    const result = dontAskY(input);

    expect(result).toEqual(expected);
  });

  it('Removes "fry" and "WHY" and then returns "Is it cold?" and "Is it coal?" in an array', () => {
    const expected = ['Is it cold?', 'Is it coal?'];
    const input = ['cold', 'fry', 'WHY', 'coal'];
    const result = dontAskY(input);
  
    expect(result).toEqual(expected);
  });
});
