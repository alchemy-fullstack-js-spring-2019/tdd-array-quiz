function filterArray(array) {
    const newArray = array.filter((item) => {
        return item.includes('y'||'Y');
    });
    return newArray;
}

module.exports = filterArray;


