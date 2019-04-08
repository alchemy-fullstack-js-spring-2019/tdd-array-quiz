function arrayFunction(array, filterLetter){
  let newArray = [];

  //const f = `/${filterLetter}/i`;
  
  const filterUpper = filterLetter.toUpperCase();

  //const pattern = /y/i;

  array.forEach(word=>{
    if(array.includes(filterLetter) | array.includes(filterUpper)){
      newArray.push(word);
    }
  });
  const finalArray = newArray.map(word=>`Is it ${word}?`);
  return finalArray;
}



module.exports = arrayFunction;
