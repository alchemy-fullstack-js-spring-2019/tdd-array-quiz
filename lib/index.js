

const arrFilter  = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arr[i].toLowerCase().includes('y')) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arrFilterAddOn  = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arr[i].toLowerCase().includes('y')) {
      newArr.push(`Is it ${arr[i]}?`);
    }
  }
  return newArr;
};


module.exports = { arrFilter, arrFilterAddOn };
