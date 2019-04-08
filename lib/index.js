function modArray(arr) {
    arr.filter(letter => {
        if(letter.includes('Y') || letter.includes('y')) {
            arr.pop(letter);
        }
    });
    console.log(arr);
    return arr;
}

module.exports = { modArray };
