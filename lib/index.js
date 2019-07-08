function dontAsk(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.lengtth; i++) {
    if(callback(arr[i])) {
      mapped[mapped.length] = arr[i]; 
    }
  }
  return mapped;
}

module.exports = { dontAsk };
