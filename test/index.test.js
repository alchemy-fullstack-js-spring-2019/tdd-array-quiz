const { dontAskWhy } = require('../lib/index.js');

describe('dontAskWhy function returns altered array', () => {
    it('dontAskWhy removes any strings with y', () => {
        const doesInclude = dontAskWhy(['why', 'is', 'this']);
        expect(doesInclude).toBeTruthy();
    });

    it('dontAskWhy removes any strings with y AND adds "is it?" in front of other words,', () => {
    
    });
});
