module.exports = function yFilter(list) {
  let newList = [];
  list.forEach(item => {
    if(typeof(item) != 'string') return;
    if(!(item.includes('y') || item.includes('Y'))) {
      newList.push(`Is it ${item}?`);
    }

  });
  return newList;

};
