/* 
1. Use the inquirer npm package to get user input. */

import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image"

inquirer
  .prompt([{
    message : "Type in your URL:", 
    name: "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrimg.png'));

    fs.writeFile('URL.txt', url, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("Success")
        }
      });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.




// 3. Create a txt file to save the user input using the native fs node module.

