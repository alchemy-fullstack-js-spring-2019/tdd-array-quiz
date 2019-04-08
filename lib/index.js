module.exports = function dontAskY(array) {
  return array.filter(word => !(word.includes('y') || word.includes('Y'))).map(word => `Is it ${word}?`);
};
