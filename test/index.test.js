const ourArr = ['sky', 'hot', 'Yeti', 'green'];

describe('test function returns no y words and is it', () => {
  it('removes words with y', () => {

    const expectedRes = ['hot', 'green'];
    
    expect(ourArr).toEqual(expectedRes);
  });

});

