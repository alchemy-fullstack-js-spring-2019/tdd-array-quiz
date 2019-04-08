const newArray = require('../lib/index');

describe('new array', () => {
  it('filters the array for the words with the letter y', () => {
    const result = newArray(['sky', 'hot', 'Yeti', 'green']);
    expect(result).toEqual(['hot', 'green']);
  });
  it('maps the filtered array to produce a new array with different phrase', () => {
    const result = newArray(['hot', 'green']);
    expect(result).toEqual(['Is it hot?', 'Is it green?']);
  });
});
