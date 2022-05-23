const path = require('path');
const pathText = (path.join(__dirname, 'text.txt'));

const fs = require('fs');
let readableStream = fs.createReadStream(pathText, 'utf8');
readableStream.on('data', function(chunk) {
    console.log(chunk);
});