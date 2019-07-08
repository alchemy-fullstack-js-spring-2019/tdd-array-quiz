const alterArray = require('../lib/index');

describe('alterArray', () => {
  it('removes all array members containing Y or y', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    const newArr = alterArray(arr);
    expect(newArr).toHaveLength(2);
  });
  
  it('modifies to "Is it <word>?" format', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    const newArr = alterArray(arr);
    expect(newArr).toEqual(['Is it hot?', 'Is it green?']);
  });
});

