
let words = ['sky', 'hot', 'Yeti', 'green'];
let letter = 'y';

function filterWords(words, y) {
  let filteredWords = words.filter(function(word) {
    return word.charAtIndex === letter;
  }
  return filteredWords;
}

module.exports = filteredWords;
