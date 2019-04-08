const { why } = require('../lib/index');

describe('don\'t ask why', () => {
  test('it returns an array of words that include y', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];
    const result = why(array);
    expect(result).toEqual(['hot', 'green']);
  });

//   test('it removes words that include y', () => {
//     const array = ['sky', 'hot', 'Yeti', 'green'];
//     const result = why(array);
//     expect(result).toEqual(['sky', 'Yeti']);
//   });

});

