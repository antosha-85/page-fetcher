const request = require('request');
const fs = require('fs');
const args = process.argv;
const url = args[2];
const fileToWrite = args[3];

request(url, (error, response, body) => {
    if(error) {
        console.log('error:', error); // Print the error if one occurred
    } else {
        fs.writeFile(fileToWrite, body, (error) => {
            if(error) {
                console.log(`some error could not write to the file`, error);
            } else {
                console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${fileToWrite}`);
            }
        }) 
    }
});