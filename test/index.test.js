const { filter } = require('../test/index.test');

describe('filter an array', () => {
  it('filter any words than contain the letter Y or y', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];
    let newArr = [];

    const filtered = ();

    expect(filtered).toEqual(['hot', 'green']);
  });
});
