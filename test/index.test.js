const removeY = require('../lib/index');

describe('removeY', () => {
    it('removes words containing the letter y, returns "is it word?"', () => {
        const old = ['sky', 'hot', 'Yeti', 'green'];
        const returned = removeY(old);
        expect(returned).toEqual(['Is it hot?', 'Is it green?']);
    });
});

