module.exports = function removeAndMod(input) {
  return input.filter(word => !/y/i.test(word)).map(word => `Is it ${word}`);
};
