const yFilter = require('../lib/index.js');

describe('yFilter function test', () => {
  it('removes all words that contain the letter y or Y', () => {
    const yWords = ['sky', 'Yeti', 'myth'];


    expect(yFilter(yWords)).toEqual([]);
  });
});
