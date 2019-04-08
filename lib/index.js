function filterY(array) {
  return array.filter(item => {
    if(item.includes('y')) return false;
    else if(item.includes('Y')) return false;
    else {
      return true;
    }
  });
}

module.exports = filterY;
