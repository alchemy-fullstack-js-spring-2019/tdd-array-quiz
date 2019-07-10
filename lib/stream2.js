const fs = require('fs');

const stream = fs.createWriteStream('test.txt');

stream.write('hi there and hi again');
stream.end();
