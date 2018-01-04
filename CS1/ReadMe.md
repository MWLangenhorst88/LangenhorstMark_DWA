# Dynamic Form Builder

## Overview
This dynamic HTML form building tool is made to help you by:
1. Extracting an array of objects sequentially
2. Determining the type of input in each object
3. Outputting the HTML accordingly
   * Outputs via console.log
   * If the code doesn't recognize the input, it will just output "Something went wrong."
4. Logging the HTML through the console

### Developer
Mark Langenhorst - marklangenhorst.com

## Personal Use

### Download/Clone
* Perhaps the easiest way is to click the green 'Clone or Download', and:
   * Copy the given URL to clone to your own repo
   * Download the ZIP to your device
   * Clone the project to your computer and use it in GitHub Desktop
* Fork the repo to your own repo and make your own changes
   * Doing a pull request with proper feedback/critquiting is appreciated!!

### Using Code
You can test the code by opening the included 'testInput.js' and Running the code, or you can put it into your own project and call the index.js file. For example, if you had the index file in the same folder as the file in which you're calling it, a simple line of code like the one I have below would work.
'''javascript
var inputFields = require('./index.js');
'''

After declaring an array of objects that hold the type, name, and value(s) you're ready to put them through the form building tool. If your array is named '''testInput''' like mine, the line below would call it and console.log the results accordingly.
'''javascript
var formResults = inputFields.getInputFields(testInput);
'''
