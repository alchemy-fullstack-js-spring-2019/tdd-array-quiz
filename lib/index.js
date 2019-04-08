function filterY(array) {
  let arrayOut = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].includes('y') || array[i].includes('Y')) {
      continue;
    }
    else {
      arrayOut.push(array[i]);
    }
  }
  return arrayOut;
}

module.exports = filterY;
