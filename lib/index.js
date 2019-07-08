function removeYAddText(arr) {
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        if(word.includes('y') || word.includes('Y')){
            arr.splice(i, 1)
        }
        word[i] += 'It is ';
    }
    return arr;
}

module.exports = { removeYAddText };