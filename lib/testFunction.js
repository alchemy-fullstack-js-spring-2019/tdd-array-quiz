function filterY(array) {
  const result = array.filter(word => !word.includes('y'));
  return result;

}

module.exports = { filterY };
