// Dry - dont repeat your self
// functions avoid code repetition
// make the code more readable
// allow reutilizations

// function declaration - do functions hoisting
function merryChristmas() {
    console.log("Merry Christmas!");
}
// message its a parameter
function showMessage(message) {
    console.log(message);
}

function addNumbers(a, b) {
    return a + b;
}

// function invocation
merryChristmas();   
// "welcome" is an argument
showMessage("Welcome!");
let result = addNumbers(3, 4);
console.log("Result: ", result);

// can be used within expressions, functions that return values
let result2 = 3 + addNumbers(3, 4) + 7;
console.log("Result2: ", result2);


// function expression, can be declared with let, var and const
let addNumbers2 = function (a, b) {
    return a + b;
}
let result3 = addNumbers(3, 4);
console.log("Result3: ", result3);

// scope

// global scope
// year variable is accessible from any program party, try to avoid declare global variables
let year = 2024;
function showYear() {
    console.log("Current Year: ", year);
}
showYear();

// local scope
// a and b variables only exist in the scope of the function
function addNumbers(a, b) {
    return a + b;
}
// function multiplyNumbers(a, b) { return a * b; }
function showYear2(year) {
    return year;
}
console.log(showYear2(2023))

function showYear3() {
    year = 2023;
    return year;
}
console.log(showYear3());
console.log(year);

function showYear4() {
    yera = 2023;
    return year;
}
console.log(showYear4());
console.log(yera); 
// correct version

function showYear5() {
    let year = 2023;
    return year;
}

// redeclare a function

// block scope
/*
if (5 > 4) {
    let msg = "bigger";
} else {
    let msg = "smaller";
}
console.log(msg); 
*/

// problem resolution
let msg;
if (5 > 4) {
    msg = "bigger";
} else {
    msg = "smaller";
}
console.log(msg);

// old way to solve the problem
// variable defined with var are function/local scope or global scope

if (5 > 4) {
    var msg2 = "bigger";
} else {
    var msg2 = "smaller";
}
console.log(msg2); 

let msg3 = 5 > 4 ? "bigger" : "smaller";
console.log(msg3);

