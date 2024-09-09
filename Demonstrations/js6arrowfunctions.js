// function expression

const addNumbers = function (a, b) {
    return a + b;
}
let result = addNumbers(3, 4);
console.log("Result: ", result);

const addNumbers2 = (a, b) => {
    return a + b;
}
let result2 = addNumbers2(3, 4);
console.log("Result2: ", result2);

// const addNumbers2 = (a, b) => a + b;

const addNumbers3 = (a, b) => {
    let result = a + b;
    return result;
}

// parentheses are mandatory only when we receive more than one parameter or none;
let square = number => number * number;
let result3 = square(2);
console.log("Result3: ", result3);

let showMessage = () => console.log("Random message");
showMessage();



