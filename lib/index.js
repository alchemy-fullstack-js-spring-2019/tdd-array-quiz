module.exports = function yFilter(list) {
  let newList = [];
  list.forEach(item => {
    if(!(item.includes('y') || item.includes('Y'))) {
      newList.push(`Is it ${item}?`);
    }

  });
  return newList;

};
