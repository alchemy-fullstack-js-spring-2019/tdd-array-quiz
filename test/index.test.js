const { wordArray } = require('../lib/index');


describe('wordArray function', () => {
  const array = ['sky', 'hot', 'Yeti', 'green'];
  // const n1 = 'Y';
  // const n2 = 'y';
  it('can remove words containing Y or y', () => {
    expect(wordArray(array)).toEqual(['Is it hot?', 'Is it green?']);

    // const mock = jest.fn(n => n > 3);
    // expect(filter([1, 2, 3, 4, 5], mock)).toEqual([4, 5]);
  });

});
