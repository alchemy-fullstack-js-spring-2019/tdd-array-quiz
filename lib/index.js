function dontAskWhy(words) {
  const filteredWords = words.filter(word => !word.includes('y') && !word.includes('Y'));
  return filteredWords.map(word => `Is it ${word}?`);
}

module.exports = dontAskWhy;
