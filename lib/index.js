const words = ['hi', 'bYe', 'YYes'];

function dontAskWhy(arr) {
  for(let i = 0; i < arr.length; i++) {
    const word = arr[i].toLowerCase();
    return word;
  }
};

dontAskWhy(words);

module.exports = { dontAskWhy };