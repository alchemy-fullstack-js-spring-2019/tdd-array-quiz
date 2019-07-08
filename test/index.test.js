const ourFunc = require('../lib/index');

const ourArr = ['sky', 'hot', 'Yeti', 'green'];

describe('test function returns no y words and is it', () => {
  it('removes words with y', () => {

    ourFunc(ourArr);

    const expectedRes = ['hot', 'green'];
    
    expect(ourArr).toEqual(expectedRes);
  });

  it('adds is it to each word', () => {

    function part2(arr) {
      arr.forEach(element => {
        element = 'Is it ' + element;
      });
      return arr;
    }

    const expectedRes = ['Is it hot', 'Is it green'];

    expect(ourArr).toEqual(expectedRes);
  });

});

