function funky(array) {
  const answer = array.filter(letter => letter.toLowerCase().indexOf('y') < 0);
  return answer;
}

module.exports = {
  funky
};
