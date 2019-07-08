function alterArray(arr) {
  const updatedArr = [];
  
  arr.forEach(word => {
    // Remove all words with 'Y' or 'y'
    if(!word.includes('Y') && !word.includes('y')) {
      // Push word in "Is it <word>?" format
      updatedArr.push('Is it ' + word + '?');
    }
  });

  return updatedArr;
}

module.exports = alterArray;
