'use strict';

let fs = require('fs');

let file = `./files/test.txt`;

let randVal = Math.random();


fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log('before', data.toString());
  
  fs.writeFile(file, randVal, (err) => {
    if (err) throw err;
    console.log('Random number saved to test.txt file!');

    fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log('after', data.toString());
    });
  });
});



