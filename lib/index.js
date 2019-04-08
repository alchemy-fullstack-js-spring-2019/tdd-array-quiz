function library(arr) {
  arr.filter((string) => {
    if(!string.includes('Y' || 'y')) {
      console.log(string);
      return string;
    }
  });
}

module.exports = library;
