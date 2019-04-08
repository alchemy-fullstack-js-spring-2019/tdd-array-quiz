function testFunction(arr) {
  const noY = arr.map(word => {
    if(word.includes('y')) {
      return 'nope';
    } else if(word.includes('Y')) {
      return 'nope';
    } else {
      return `${word}`;
    }
  });
  return noY;
}

module.exports = {
  testFunction
};
