function why(array){
  let newArray = [];
  array.forEach((word) => {
    if(!word.includes('y' || 'Y')){
      newArray.push(word);
    }
  });
  return newArray;
}

why(['sky', 'hot', 'Yeti', 'green']);

module.exports = { why };
