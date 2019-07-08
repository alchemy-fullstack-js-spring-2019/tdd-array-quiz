const { why } = require('./why');

describe('oh man what is happening to this class I am gonna cry', () => {


    it('if given a string of words, removes the WORD that contains the letter Y', () => {

        const input = 'why so serious';

        const expected = 'is it so?';

        const result = why(input);

        expect(result).toBe(expected);

    }); 

});
