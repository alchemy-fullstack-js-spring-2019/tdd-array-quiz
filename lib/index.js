function transformArray(array) {
  const filteredArray = array.filter(item => {
    return !item.includes('y') || !item.includes('Y');
  });
  return filteredArray;
}

module.exports = { transformArray };
