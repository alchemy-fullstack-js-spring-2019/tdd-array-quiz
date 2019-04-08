function noY(words) {
  //filter out words that contain y
  let newWords = words.filter((word) => word.includes('y'));
  
  
  console.log('newWords', newWords);
  return newWords;

}

module.exports = { noY };
