const mapArray = require('lib/array');



describe('takes and array, filters and modifies', () => {
    it('finds items in array containing Y or y', () => {
        const testArray = ['sky', 'hot', 'Yeti', 'green'];
        expect(mapArray(testArray)).toEqual(['hot', 'green']);
    });
});
