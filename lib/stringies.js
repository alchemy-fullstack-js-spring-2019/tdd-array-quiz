function stringies(arr) {
  const y = ['y', 'Y'];
  const filteredArr = arr.filter(item => y.some(term => !item.includes(term)));

  const mappedString = filteredArr.map(item => `You are so${item}`);

  return mappedString;
}


module.exports = { stringies };
