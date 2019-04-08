function modArray(arr) {
    const regEx = /y/i;
    return arr.filter(letter => regEx.test(letter));
}

module.exports = { modArray };
