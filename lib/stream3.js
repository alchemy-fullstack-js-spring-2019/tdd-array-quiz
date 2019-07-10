const fs = require('fs');

const readStream = fs.createReadStream('./README.md');
const writeStream = fs.createWriteStream('./README-copy.md');

readStream.on('data', data => {
  writeStream.write(data);
});

readStream.on('end', () => {
  writeStream.end();
});
