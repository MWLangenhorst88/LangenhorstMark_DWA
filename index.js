// MARK LANGENHORST | 2018 - FREE TO USE ON ANY PROJECT
// MARKLANGENHORST.COM
module.exports.getInputFields = function getInputFields(inputFields) {
  // Declare inputResults as blank string to ensure it's not being called again with past input
  let inputResults = '';
  inputFields.forEach((input) => {
    switch (input.type) {
      case 'text':
        input += `<input type="text" name="${input.name}" placeholder="${input.placeholder}">`;
        break;

      case 'button':
        input = `<input type="button" name="${input.name}"value="${input.value}">`;
        break;
      // AS YOU CAN SEE, I HAVE A DEFAULT OF THREE DIFFERENT VALUES FOR RADIO, CHECKBOX, AND SELECT.
      // IF YOU ADD A FEW MORE OPTIONS HERE TO FIT YOUR NEEDS, I WON'T TELL :)
      case 'radio':
        input = `<input type="radio" name="${input.name}" value="${input.value1}">\n` +
                `<input type="radio" name="${input.name}" value="${input.value2}">\n` +
                `<input type="radio" name="${input.name}" value="${input.value3}">`;
        break;

      case 'checkbox':
        input = `<input type="checkbox" name="${input.name}" value="${input.value1}">\n` +
                `<input type="checkbox" name="${input.name}" value="${input.value2}">\n` +
                `<input type="checkbox" name="${input.name}" value="${input.value3}">`;
        break;

      case 'select':
        input = `<select>\n\t<option name="${input.name1}" value="${input.value1}">\n` +
                `\t<option name="${input.name2}" value="${input.value2}">\n` +
                `\t<option name="${input.name3}" value="${input.value3}">\n </select>`;
        break;

      default:
        // Something happened that shouldn't have, so throw error instead of adding it to string
        throw new Error('Something went wrong. Please check your work and try again.');
    }
    inputResults += input;
  });
  return inputResults;
};
