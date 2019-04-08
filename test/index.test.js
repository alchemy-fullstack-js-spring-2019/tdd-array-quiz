const { modArray } = require('../lib/index.js');

describe('string array function', () => {
    it('takes a string and removes words with Y and y', () => {
        const array = ['sky', 'hot', 'Yeti', 'green']; 
        const result = modArray(array);
        expect(result).toEqual(['hot', 'green']);
    });
});
