const testFunction = require ('../lib/index.js');

describe('quiz', () => {
  it('removes words that contain y and Y', () => {
    const arr = ['sky', 'green', 'Yeti', 'hot'];
    expect(testFunction(arr)).toEqual(['nope', 'green', 'Yeti', 'hot']);
  });

  // it('returns -is it $word-?', () ={>{

  // })
});

//includes