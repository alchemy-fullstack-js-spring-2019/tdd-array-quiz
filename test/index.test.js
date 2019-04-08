const library = require('../lib/index');

describe('library function', () => {

  it('take array of words and return words that remove Y or y', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];    
    expect(library(array)).toEqual([['hot', 'green']]);
  });

});
