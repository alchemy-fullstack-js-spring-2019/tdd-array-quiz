const removeYAddText = require('../lib/index');

describe('testing the removeYAddText function', () => {
    it('returns an array', () => {
        const someArray = ['sky', 'hot', 'Yeti', 'green'];
        const result = removeYAddText(someArray);
        expect(result).toEqual(expect.any(Array));
    })
})
