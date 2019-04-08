function filterArray(array) {
    array.filter((item) => {
        return item.includes('y' || 'Y');
    });
    return array;
}

module.exports = filterArray;


