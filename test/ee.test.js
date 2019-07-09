const EventEmitter = require('events');


describe('event emiter thing', () => {
  it('is the first exc in event emit training', done => {
    const ee = new EventEmitter();
    
    ee.on('we did it', () => {
      console.log('done');
      done()
    });

    ee.emit('we did it');

  });
  it('emits event listens for a event and data', done => {

    const ee = new EventEmitter();

    ee.on('newDog', dog => {
      expect(dog).toEqual({
        name: 'spot',
        age: 5,
        weight: '201lbs'
      });

    });

    ee.emit('newDog', dog => {
      name: 'spot',
      age: 5,
      weight: '201lbs'
      });
    })


  })
});
