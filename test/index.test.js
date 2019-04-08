const {
  library
}= require('lib/index.js');

describe('library function', () => {
  it('array of strings returning a new array that removed words containing the letters(y or Y)', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    expect(library['sky', 'hot', 'Yeti', 'green']).toEqual['hot', 'green'];
  });
});
