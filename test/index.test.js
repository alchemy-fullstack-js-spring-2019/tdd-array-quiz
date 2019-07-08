const { dontAskWhy } = require('../lib/index.js');

describe('dontAskWhy function returns altered array', () => {
    // it('dontAskWhy removes any strings with y', () => {
    //     const doesInclude = dontAskWhy(['why', 'is', 'this']);
    //     expect(doesInclude).toBeTruthy();
    // });

    it('dontAskWhy adds "is it?" in front of other words,', () => {
     const addsWords = dontAskWhy(['testing', 'working']);
     expect(addsWords).toEqual(['is it testing?', 'is it working?'])
    });
});
