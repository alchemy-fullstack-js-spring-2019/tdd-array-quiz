const removeAndMod = require('../lib/index');

describe('Don\'t ask why', () => {
  it('Modify the original word to be a phrase', () => {
    const expected = ['Is it hot', 'Is it green'];
    const input = ['hot', 'green'];
    const result = removeAndMod(input);
    expect(result).toEqual(expected);
  });
});
