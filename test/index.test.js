const { arrFilter, arrFilterAddOn } = require('../lib/index');

describe('tdd test', () => {
  it('that takes an array of words and returns a new array with only words containing no "y"', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    const newArr = arrFilter(arr);
    expect(newArr).toEqual(['hot', 'green']);
  });

  it('that takes the new array and adds "Is it..."', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    const newArr = arrFilterAddOn(arr);
    expect(newArr).toEqual(['Is it hot?', 'Is it green?']);
  });
});
