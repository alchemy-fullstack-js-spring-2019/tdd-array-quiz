const { funky } = require('../lib/index');

describe('FUNKY FUNCTION TEST', () => {
  it('filter out words that contain y', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];
    const result = funky(array);
    expect(result).toEqual(['hot', 'green']);
  });

  it('returns filtered array into a sentence', () => {
    expect().toEqual();
  });
});
