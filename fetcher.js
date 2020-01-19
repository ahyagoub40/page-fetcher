const request = require('request');
const fs = require('fs');
// use process.argv
const URL = process.argv[2];
const file = process.argv[3];


request(URL, (error, response, body) => {
  if (error) {
    error = "invalid URL";
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  if (response.statusCode !== 200) {

    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    return;
  }
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(file, body, (error) => {
    if (error) {
      throw error;
    
    } else {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${file}`);
    }
  });
});
