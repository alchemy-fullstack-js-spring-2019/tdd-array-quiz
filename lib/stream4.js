const fs = require('fs');


const readStream = fs.createReadStream('./README.md');
const writeStream = fs.createWriteStream('./README-copy2.md');

readStream
  .pipe(writeStream);

console.log(writeStream);
