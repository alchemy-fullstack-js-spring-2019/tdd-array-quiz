const { noY } = require('../lib/index.js');

describe('function filters out words with the Y and changes message with remaining', () => {
  it('filters out words that contain y or Y', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];

    expect(noY(words)).toEqual(['hot', 'green']);
  });
});
