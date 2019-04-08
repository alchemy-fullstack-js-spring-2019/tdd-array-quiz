const arrayFunction = require('./arrayFunction');

describe('Quiz 1', ()=>{
  it('passes array to function, filters out words with y, returns array that adds is it to front of filtered items', ()=>{
    const originalArray = ['sky', 'hot', 'Yeti', 'green'];
    const modArray = ['Is it hot?', 'Is it green?'];
    const filterLetter = 'y';

    const newArray = arrayFunction(originalArray, filterLetter);
    expect(newArray).toEqual(modArray);
  });
})
;
