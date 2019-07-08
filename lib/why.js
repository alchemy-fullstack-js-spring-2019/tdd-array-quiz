function why(arr) {
    const result = [];

    arr.forEach(word => {
        if(!word.toLowerCase().includes('y')) {
            result.push(`is it ${word}?`);
        }
    });

    return result;
}

module.exports = { why };
