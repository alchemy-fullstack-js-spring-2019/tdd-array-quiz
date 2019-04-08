

describe('takes an array of strings and creates a new array', () => {
  it('filters out words containing y', () => {
    expect(['sky', 'hot', 'Yeti', 'green']).toEqual(['hot', 'Yeti', 'green']);
  });
  it('filters out words containing Y', () => {
    expect(['sky', 'hot', 'Yeti', 'green']).toEqual(['sky', 'hot', 'green']);
  });
});



