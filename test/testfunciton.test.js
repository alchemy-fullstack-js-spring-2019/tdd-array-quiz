const { filterY } = require('../lib/testFunction.js');

describe('filter function test', () => {

  it('return a new array that filters out the letter y', () => {
    const result = filterY(['yeti', 'hot', 'sky', 'butterfingers']); 

    expect(result).toEqual(['hot', 'butterfingers']);


  });
    
});
