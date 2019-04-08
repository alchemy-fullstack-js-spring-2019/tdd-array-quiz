function transformArray(array) {
  const filteredArray = array.filter(item => {
    return !item.includes('y') || !item.includes('Y');
  });
  return filteredArray;

}

function modifyArray(array) {
  const modifiedArray = filteredArray.map(item => {
    return `Is it ${item}?`;
  });
  return modifiedArray;
}

module.exports = { transformArray };
