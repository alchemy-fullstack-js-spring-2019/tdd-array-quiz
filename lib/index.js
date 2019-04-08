function removeY(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes('y') && arr[i].includes('y')) {
      arr.splice(i, 1);
    }
    
  }
  return arr;
}

module.exports = removeY;
