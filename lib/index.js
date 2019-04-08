function testFunction(arr) {
  const noY = arr.map(word => {
    if(word.includes('y')) {
      return 'nope';
    } else if(word.includes('Y')) {
      return 'nope';
    } else {
      return `${word}`;
    }
  });
  return noY;
}

function secondFunction(arr) {
  const nowhY = arr.map(word => {
    if(word.includes('y')) {
      return 'nope';
    } else if(word.includes('Y')) {
      return 'nope';
    } else {
      return `${word}`;
    }
    
  });
  return nowhY.filter(word => {
    word == ('nope');
  });

  //I got stuck here, I could not get the array to return anything to the test?

  
  // const filtered = nowhY.filter(word => {
  //   word.includes('nope');
  // });
  
  // return filtered;

  
}

function correctFunction(arr){
  return arr
    .filter(item => !item.toUpperCase().includes('Y'))
    .map(item => `Is it ${item}?`);
}

module.exports = {
  testFunction,
  secondFunction,
  correctFunction
};
