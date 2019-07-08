function dontAskWhy(arr) {
    let newArray = [];
    return arr.forEach(word => {
        return 'is it' + word + '?';
    });
}

module.exports = {
    dontAskWhy
};
