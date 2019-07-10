const fs = require('fs');
// const EventEmitter = require('events');

const stream = fs.createReadStream('./README.md');

// const ee = new EventEmitter();

// ee.on('data', data => {
//   console.log(data);
// });

// ee.emit('data', stream);

// stream.on('data', data => {
//   console.log(data);
// });


stream.on('data', console.log);