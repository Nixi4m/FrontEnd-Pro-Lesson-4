let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (isNaN(numOrStr) || numOrStr) {
    case true: {
        console.log(' number is Ba_NaN');
        break;
    }
    case null: {
        console.log('ви скасували');
        break;
    }
    case '': {
        console.log('Empty String');
        break;
    }
    default: {
        console.log('OK!')
    }
}