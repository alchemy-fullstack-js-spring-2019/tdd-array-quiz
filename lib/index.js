function newArray(array) {
  array.filter(value => value === 'y');
  array.map(word => `Is it ${word}`);
}


module.exports = newArray;
