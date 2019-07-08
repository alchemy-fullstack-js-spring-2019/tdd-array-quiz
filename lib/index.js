function removeY(arr) {
    const removed = {};
    const searchTerms = ['Y', 'y'];
    for (let i = arr.length-1; i >=0; i--) {
        if (arr[i] === searchTerms) {
            arr.splice(i, 1);
        } else ('Is it ' + arr[i] + '?');
    }
    return removed;
}

module.exports = { removeY };