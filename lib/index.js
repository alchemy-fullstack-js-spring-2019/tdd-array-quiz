module.exports = function removeAndMod(input) {
  return input.filter(word => !word.includes('y')).filter(word => !word.includes('Y')).map(word => {
    return `Is it ${word}`;
  });
};
