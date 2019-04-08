
describe('takes an array of strings and creates a new array', () => {
  it('filters out words containing y', () => {
    expect(['sky', 'hot', 'Yeti', 'green']).toEqual(['hot', 'Yeti', 'green']);
  });
});

// describe('iterrates over an array', () => {
//   it('checks to see if words contain the letter y', () => {
//     expect(['sky', 'hot', 'Yeti', 'green']).toInclude('y');
//   });

// });
