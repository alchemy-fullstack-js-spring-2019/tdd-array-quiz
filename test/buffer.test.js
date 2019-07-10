

describe('buffer exercise', () => {
  it('is the first exercise test, buff length 10', () => {
    const buf = Buffer.alloc(10);


    expect(buf).toHaveLength(10);
  });

  it('is ex2, the string to buffer to string ex', () => {
    const buf1 = Buffer.from('here is pizza');

    console.log(buf1);
    console.log(buf1.toString());

    expect(buf1.toString()).toEqual('here is pizza');
  });
});
