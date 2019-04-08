function testFunction(arr) {
  const noY = arr.map(word => {
    if(word.includes(y)) {
      return `${word}`;
    } else {
      return 'nope';
    }
  });
  return noY;
}

module.exports = {
  testFunction
};
