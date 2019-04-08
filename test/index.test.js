const modifyString = require('../lib/index');

describe('string modifier', () => {
  it('finds any instance of y or Y and removes that string from the array', () => {
    const input = ['sky', 'hot', 'Yeti', 'green'];
    const expected = ['hot', 'green'];
    console.log(expected, 'expect');
    expect(modifyString(input)).toEqual(expected);

  });

  it('takes the remaining words in the array and puts them into a new string', () => {
    const input = ['sky', 'hot', 'Yeti', 'green'];
    const expected = ['Is it hot?', 'Is it green?'];

    expect(modifyString(input)).toEqual(expected);
  });
});
