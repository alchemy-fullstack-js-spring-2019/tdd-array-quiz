
function modifyString(input) {
  let newArray = [];
  let secondArray = [];
  input.filter(word => {
    if(word.includes('y')) {
      newArray.push(word);
    }
    else if(word.includes('Y')) {
      newArray.push(word);  
    }
    else {
      secondArray.push(word);
    }
  });

  return secondArray;
}

module.exports = modifyString;
