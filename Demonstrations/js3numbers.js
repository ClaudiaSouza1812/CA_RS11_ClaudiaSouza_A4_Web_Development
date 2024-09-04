// numeric data type: number;
// internally js store all numeric data types as floating-points;
// numbers types in javascript:
/*
123
123.456
4.3456e+12
7.5432E-54
*/  

/*
numeral system

base 10 (decimal) - 0-9
base 2 (binary) - 0-1
    0b1111
base 8 (octal) - 0-7
    0123
base 16 (hexadecimal) - 0-9, A-F
    0xaf34
*/

let total = 0.2 + 0.1;
console.log(total); // 0.30000000000000004

// 0.25 + 0.34 = 0.590000000000000001

let total2 = (0.2 * 100 + 0.1 * 100) / 100;
console.log(total2); // 0.3
console.log(typeof total2); // number

let total3 = total.toFixed(2); 
console.log(total3); // 0.30
console.log(typeof total3); // string

let total4 = Number.parseFloat(total3);
console.log(typeof total4); // number
let total5 = Number(total3);
console.log(typeof total5); // number
let total16 = +total3;
console.log(typeof total16); // number

let a = 2 + "3" + 4;
console.log(a); // "234"
let b = 2 + 3 + "4";
console.log(b); // "54"
let c = "2" + 3 + 4;
console.log(c); // "234"
let d = 2 + 3 + 4;
console.log(d); // 9

// Infinity, -Infinity, NaN (Not a Number)
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(1 / "teste"); // NaN
console.log(0 * Infinity); // NaN
console.log(Infinity - Infinity); // NaN
console.log(NaN + 5); // NaN

if (Number.isNaN(1 / "teste")) {
    console.log("Is not a number");
}

// typeof NaN
// 'number'

let valor1 = 12 / 5;
let valor2 = 12 / 6;

if (Number.isInteger(valor1)) {
    console.log("Is a number");
} else {
    console.log("Is not a number");
}

if (Number.isInteger(valor2)) {
    console.log("Is a number");
} else {
    console.log("Is not a number");
}

let numero01 = 12;
let numero02 = new Number(12);
console.log(numero01); // 12
console.log(numero02.toString()); // 12
console.log(typeof numero02); // object

