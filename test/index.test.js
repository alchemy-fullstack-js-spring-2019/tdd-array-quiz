const { testFunction } = require ('../lib/index.js');

describe('quiz', () => {
  it('removes words that contain y and Y', () => {
    const arr = ['sky', 'green', 'Yeti', 'hot'];
    expect(testFunction(arr)).toEqual(['nope', 'green', 'nope', 'hot']);
  });

  // it('prints back words that are not nope', () => {
  //   const arr = ['nope', 'green', 'Yeti', 'hot'];
  //   ex
  // });
});
