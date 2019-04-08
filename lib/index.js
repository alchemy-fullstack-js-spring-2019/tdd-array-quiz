module.exports = function fnName(arr) {
  const newArr = arr.filter(word => {
    if(word.split('').includes('Y') || word.split('').includes('y')) {
      return false;
    } else return true;
  });
  
  const finalArray = newArr.map(word => {
    console.log(word);
    const phrase = `Is it ${word}`;
    console.log(phrase);
    return phrase;
  });
  console.log(finalArray);
  return finalArray;
};

