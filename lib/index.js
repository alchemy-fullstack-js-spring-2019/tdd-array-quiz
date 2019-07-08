function alterArray(arr) {
  const updatedArr = [];
  // Remove all words with 'Y' or 'y'
  arr.forEach(word => {
    if(!word.includes('Y') && !word.includes('y')) {
      updatedArr.push(word);
    }
  });
  return updatedArr;
}

module.exports = alterArray;
