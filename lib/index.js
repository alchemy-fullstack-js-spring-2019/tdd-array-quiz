function noY(words) {
  let newWords = words.filter((word) => word.includes('y'));
  return newWords;
}

module.exports = { noY };
