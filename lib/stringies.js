function stringies(arr) {
  const filteredArr = arr.filter(item => !item.includes('y'));

  const mappedString = filteredArr.map(item => `You are so ${item}`);

  return mappedString;
}


module.exports = { stringies };
