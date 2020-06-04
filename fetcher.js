const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const url = args[0];
const localFilePath = args[1];

request(url, (error, response, body) => {
 // console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let myVar = 1;
  fs.writeFile(localFilePath, body, (err) => {
    if (err) throw err;
    myVar = 2;
    fs.stat(localFilePath, (err, stats) => {
      console.log("Downloaded and saved " + stats.size + " bytes to " + localFilePath);
    });
  }
  );
});

//http://www.example.edu/ text.txt