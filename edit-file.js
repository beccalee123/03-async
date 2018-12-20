'use strict';

let fs = require('fs');

let file = `./files/test.txt`;

fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log('before', data.toString());
});

let randVal = Math.random();

fs.writeFile(file, randVal, (err) => {
  if (err) throw err;
  console.log('Random number saved to test.txt file!');
});

fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log('after', data.toString());
});