
const fs = require('fs');

const file = '1-json.json';

const dataBuffer = fs.readFileSync(`${file}`);
const dataJSON = dataBuffer.toString();
const book = JSON.parse(dataJSON);

book.title = 'Limitless';
book.author = 'Jim Kwik';

const bookJSON = JSON.stringify(book);
fs.writeFileSync(`${file}`, bookJSON);

