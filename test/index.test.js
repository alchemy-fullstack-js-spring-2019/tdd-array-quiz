

describe('Remove words with letter Y or y, replace with is it', () => {
  const removeY = inputTest(['sky', 'hot', 'Yeti', 'green']);
  assert.deepEqual(['Is it hot?', 'Is it green?']);
});
