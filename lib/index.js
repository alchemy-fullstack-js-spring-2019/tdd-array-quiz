function removeY(array) {
    const filteredArray = array.filter(word => !word.includes('y') && !word.includes('Y'));
    const mappedArray = filteredArray.map(word => `Is it ${word}?`);
    return mappedArray;
}

module.exports = removeY;
