function library(arr) {
  arr.filter((string) => {
    const exclude = ('Y'||'y');
    console.log(string.includes(exclude)); 
  });
  // return ['hot', 'green'];
}

module.exports = library;
