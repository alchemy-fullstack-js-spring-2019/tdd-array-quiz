const { why } = require('../lib/why');

describe('oh man what is happening to this class I am gonna cry', () => {


    it('if given a string of words, removes the WORD that contains the letter Y', () => {

        const input = ['why', 'how', 'what', 'yes'];

        const expected = ['is it how?', 'is it what?'];

        const result = why(input);

        expect(result).toEqual(expected);

    }); 

});
