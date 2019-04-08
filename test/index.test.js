const { transformArray } = require('../lib/index.js');

describe('transformArray function', () => {
  it('takes array of strings and removes any words containing Y or y', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];
    const result = transformArray(words);
    expect(result).toEqual(['sky', 'hot', 'green']);
  });

  it('changes new array with new sentence', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];
    const result = transformArray(words);
    expect(result).toEqual(['Is it sky?', 'Is it hot?', 'Is it green?']);
  });
});
