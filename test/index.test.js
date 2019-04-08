const { noY } = require('../lib/index.js');

describe('function filters out words with the Y and changes message with remaining', () => {
  it('return words that contain y', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];

    expect(noY(words)).toEqual(['sky']);
  });
});
