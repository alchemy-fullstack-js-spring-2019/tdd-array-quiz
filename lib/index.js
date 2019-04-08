function why(array){
  let newArray = [];
  array.forEach((word) => {
    if(word.includes('y')){
      newArray.push(word);
    }
    if(word.includes('Y')){
      newArray.push(word);
    }
  });
  return newArray;
}

function isIt(array){
  let newArray = [];
  array.forEach((word) => {
    if(word.includes('y')){
      newArray.push(word);
    }
    if(word.includes('Y')){
      newArray.push(word);
    }
  });
  let returnArray = [];
  newArray.forEach((item) => {
    returnArray.push(`Is it ${item}?`) ;
  });
  return returnArray;
}

why(['sky', 'hot', 'Yeti', 'green']);


module.exports = { why, isIt };
