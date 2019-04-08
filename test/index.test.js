const { testFunction, secondFunction, correctFunction } = require ('../lib/index.js');

describe('quiz', () => {
  it('removes words that contain y and Y', () => {
    const arr = ['sky', 'green', 'Yeti', 'hot'];
    expect(testFunction(arr)).toEqual(['nope', 'green', 'nope', 'hot']);
  });

  it('prints back words that are not nope', () => {
    const array2 = ['sky', 'green', 'Yeti', 'hot'];
    expect(secondFunction(array2)).toEqual(['It is green', 'It is hot']);
  });
});
