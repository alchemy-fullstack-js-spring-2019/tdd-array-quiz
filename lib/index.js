function ourFunc(arr) {
  arr.forEach(element => {
    if(element.includes('y' || 'Y')) {
      arr.pop(element);
    }
  });
  return arr;
}

module.exports = ourFunc;