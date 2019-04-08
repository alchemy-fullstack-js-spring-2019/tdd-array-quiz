const assert = require('assert');
const removeY = require('../lib/index');

describe('TDD for test', () => {
  it('Remove words with letter Y or y, replace with is it', () => {
    const result = removeY(['sky', 'hot', 'Yeti', 'green']);
    assert.deepEqual(['Is it hot?', 'Is it green?']);
  });
});
