# Dynamic Form Builder

## Overview
This dynamic HTML form building tool is made to help you by:
1. Extracting an array of objects sequentially
2. Determining the type of input in each object
3. Outputting the HTML accordingly
   * Outputs via console.log
   * If the code doesn't recognize the input, it will just output "Something went wrong."
4. Logging the HTML through the console

### Input Options and Attributes
* Text
   * Name
   * Placeholder
* Button - Can be used for submit, reset or other functionality
   * Name
   * Value (Example: 'Click here!')
* Radio - Can select ONE option of three values
   * Name
   * 3 Value names
* Checkbox - Can check UP TO THREE options of three values
   * Name
   * 3 Value names
* Select - Dropdown box of three different values from which to choose
   * 3 Names for each option
   * 3 Option values that will appear in select 

### Developer
Mark Langenhorst - marklangenhorst.com

### AirBnB Style Guide - ESLint
This Form Builder, as of [v1.2.0,](https://github.com/MWLangenhorst88/LangenhorstMark_DWA/releases/tag/v1.2.0) is compliant with the AirBnB style guide using ESLint.

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
```javascript
var inputFields = require('./index.js');
```

After declaring an array of objects that hold the type, name, and value(s) you're ready to put them through the form building tool. If your array is named ```testInput``` like mine, the line below would call it and console.log the results accordingly.
```javascript
var formResults = inputFields.getInputFields(testInput);
```
