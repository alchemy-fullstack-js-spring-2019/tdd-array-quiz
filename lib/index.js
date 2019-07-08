function dontAskWhy(arr) {
    return arr.forEach(word => {
        return word.includes('y', 'Y');
    });
}

module.exports = {
    dontAskWhy
};
