const { why } = require('../lib/index');
const { isIt } = require('../lib/index');

describe('don\'t ask why', () => {
  test('it returns an array of words that include y', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];
    const result = why(array);
    expect(result).toEqual(['sky', 'Yeti']);
  });

  test('it returns a string with the y word in it', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];
    const returnArray = ['Is it sky?', 'Is it Yeti?'];
    const result = isIt(array);
    expect(result).toEqual(returnArray);
  });


});

