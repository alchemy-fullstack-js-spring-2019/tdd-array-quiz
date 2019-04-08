const library = require('../lib/index');

describe('library function', () => {

  it('take array of words and return words that remove Y or y', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];    
    expect(library(arr)).toEqual(['hot', 'green']);
  });

});
