const { removeYAddText } = require('../lib/index');

describe('testing the removeYAddText function', () => {
    it('returns an array', () => {
        const someArray = ['sky', 'hot', 'Yeti', 'green'];
        const result = removeYAddText(someArray);
        expect(result).toEqual(expect.any(Array));
    });

    it('returns an array without words containing leter y', () => {
        const someArray = ['sky', 'hot', 'Yeti', 'green'];
        const result = removeYAddText(someArray);
        expect(result).toEqual(['hot', 'green']);
    });

    it('returns an array with existing words updated with extra text', () => {
        const someArray = ['sky', 'hot', 'Yeti', 'green'];
        const result = removeYAddText(someArray);
        expect(result).toEqual(['It is hot', 'It is green']);
    })
})
