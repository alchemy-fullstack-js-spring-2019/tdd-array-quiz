module.exports = function fnName(arr) {
  const newArr = arr.filter(word => {
    if(word.split('').includes('Y') || word.split('').includes('y')) {
      return false;
    } else return true;
  });
  console.log(newArr);
};

