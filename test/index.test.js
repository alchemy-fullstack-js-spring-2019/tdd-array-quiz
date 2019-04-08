const { noY } = require('../lib/index.js');

describe('function filters out words with the Y and changes message with remaining', () => {
  it('filters out words that contain y or Y', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];

    expect(noY(words)).toEqual(['hot', 'green']);
  });
});


//goals: remove any words that contain Y or y
//word changed to 'Is it <word>n


//what do I start with... first test 
