const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('data', (data) => {
  console.log(data);
});

ee.emit('data', {
  name: 'barney',
  holiday: 'xmas'
});

ee.on('we did it', () => {
  console.log('done');
});

ee.emit('we did it');
