function ourFunc(arr) {
  // arr.forEach(element => {
  //   if(element.includes('y' || 'Y')) {
  //     arr.pop(element);
  //   }
  // });
  return arr
    .filter(word => !word.tolo);
}


exports.module = {
  ourFunc
};

