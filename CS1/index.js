var inputFields = [{type: 'text'}, {type: 'select'}, {type: 'radio'}];

inputFields.forEach(function (t) {
    switch (t.type){
        case 'text':
            t = '<input type="text">';
            break;

        case 'button':
            t = '<input type="button">';
            break;

        case 'radio':
            t = '<input type="radio" name="radio" value="1">\n' +
                '<input type="radio" name="radio" value="2">\n' +
                '<input type="radio" name="radio" value="3">';
            break;

        case 'checkbox':
            t = '<input type="checkbox" name="check" value="1">\n' +
                '<input type="checkbox" name="check" value="2">\n' +
                '<input type="checkbox" name="check" value="3">';
            break;

        case 'select':
            t = '<select>\n' +
                '\t<option name="select" value="1">\n' +
                '\t<option name="select" value="2">\n' +
                '\t<option name="select" value="3">\n' +
                '</select>';
            break;

        default:
            t = "Something went wrong.";
            break;
    }
    console.log(t + '\n');
});