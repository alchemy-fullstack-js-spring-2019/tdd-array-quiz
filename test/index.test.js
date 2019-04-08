const fnName = require('../lib/index');

describe('map and filter', () => {
  it('output is what was expected', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    const expected = ['Is it hot?', 'Is it green?'];
    expect(fnName(arr)).toEqual(expected); 
  });
});
