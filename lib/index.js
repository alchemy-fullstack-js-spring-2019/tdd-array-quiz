module.exports = function fnName(arr) {
  const newArr = arr.filter(word => {
    if(word.split('').includes('Y') || word.split('').includes('y')) {
      return false;
    } else return true;
  });
  
  const finalArray = newArr.map(word => {
    const phrase = `Is it ${word}`;
    return phrase;
  });

  console.log(finalArray);
  return finalArray;
};

