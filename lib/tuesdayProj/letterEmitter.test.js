const LetterEmitter = require('./letterEmitter');

describe('test for our letter emmiter', () => {
  let letterEmitter;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('emits an event for each letter', done => {
    const callback = jest.fn();
    letterEmitter.on('letter', callback);

    letterEmitter.once('end', () => {
      'here is pizza'.split('').forEach((letter, offset) => {
        expect(callback).toHaveBeenCalledWith({
          letter,
          offset
        });
      });
      done();
    });

    letterEmitter.read('here is pizza');
  });
});
