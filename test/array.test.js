const filterArray = require('../lib/array');



describe('takes and array, filters and modifies', () => {
    it('finds items in array containing Y or y', () => {
        const testArray = ['sky', 'hot', 'Yeti', 'green'];
        expect(filterArray(testArray)).toEqual(['hot', 'green']);
    });
});
