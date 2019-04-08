const yFilter = require('../lib/index.js');

describe('yFilter function test', () => {
  it('removes all words that contain the letter y or Y', () => {
    const yWords = ['sky', 'Yeti', 'myth'];
    expect(yFilter(yWords)).toEqual([]);
  });
  it('adds `Is it + ?` to strings that don`t contain a y', () => {
    const input = ['sky', 'hot', 'Yeti', 'green'];
    expect(yFilter(input)).toEqual(['Is it hot?', 'Is it green?']);
  });
});
