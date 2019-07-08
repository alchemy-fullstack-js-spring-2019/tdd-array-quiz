//if .includes splice?

const { dontAsk } = require('../lib/index');

describe('array function', () => {
  it('returns an array', () =>{
    const colors = ['yellow', 'green', 'blue'];
    const colorArr = dontAsk(colors);

    expect(colorArr).toEqual(expect.any(Array));
  }); 

  it('returns indexs with y', () => {
    const colors = ['green', 'yellow', 'blue'];
    const index = dontAsk(colors, color => color.includes('y'));

    expect(index).toEqual(1);
  });
})