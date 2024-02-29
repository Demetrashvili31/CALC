
// ____________________________________________________----------------------------------------------------------------------------swori logika
function getUserInput(message) {
    let input;
    while (!input || isNaN(input)) {
        input = prompt(message);
        if (!input || isNaN(input)) {
            alert('You must enter a valid number.');
        }
    }
    return Number(input);
}

let userInput = getUserInput('Please enter the first number:');
let userInput2 = getUserInput('Please enter the second number:');


let action;

do {
    action = prompt('Please enter any of these math actions: (+, -, *, /)');
    if (!['*', '/', '+', '-'].includes(action)) {
        alert('Please enter a valid math action: (+, -, *, /)');
    }
} while (!['*', '/', '+', '-'].includes(action));

switch (action) {
    case '*':
        console.log(Number(userInput) * Number(userInput2));
        break;
    case '/':
        if (Number(userInput2) !== 0) {
            console.log(Number(userInput) / Number(userInput2));
        } else {
            console.log('Cannot divide by zero.');
        }
        break;
    case '-':
        console.log(Number(userInput) - Number(userInput2));
        break;
    case '+':
        console.log(Number(userInput) + Number(userInput2));
        break;
    default:
        console.log('wrong operation');
}



//-------------------------

















