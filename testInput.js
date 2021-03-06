const inputFields = require('./index.js');

const testInput = [
  {
    type: 'text',
    name: 'textbox',
    placeholder: 'Enter Text Here',
  },
  {
    type: 'radio',
    name: 'radioInput',
    value1: 'radio 1',
    value2: 'radio 2',
    value3: 'radio 3',
  },
  {
    type: 'checkbox',
    name: 'checkInput',
    value1: 'check 1',
    value2: 'check 2',
    value3: 'check 3',
  },
  {
    type: 'select',
    name1: 'option 1',
    name2: 'option 2',
    name3: 'option 3',
    value1: 'option 1',
    value2: 'option 2',
    value3: 'option 3',
  },
  {
    type: 'button',
    name: 'button',
    value: 'Click Here!',
  },
];

inputFields.getInputFields(testInput);
