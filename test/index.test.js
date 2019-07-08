const {dontAskWhy} = require('../index');

describe('arr', () => {
  it('Y to lowercase', () => {
    const arr = ['hi', 'bYe'];  
    const newArr = dontAskWhy(arr);
    expect(newArr) = toEqual(arr);
  });
});