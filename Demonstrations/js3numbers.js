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

// Math library/namespace

console.log(Math.PI); // 3.141592653589793
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3);

let maximo01 = Math.max(4, 3, 10, 234, -4, 56) // 234
console.log(maximo01);

let minimo01 = Math.min(4, 3, 10, 234, -4, 56) // -4
console.log(minimo01);

let valorArredondar = Math.PI;
console.log(valorArredondar); // 3.141592653589793
let arredondarParaCima = Math.ceil(valorArredondar);
console.log(arredondarParaCima); // 4
let arredondarParaBaixo = Math.floor(valorArredondar);
console.log(arredondarParaBaixo); // 3
let arredondarMatematicamente = Math.round(valorArredondar); 
console.log(arredondarMatematicamente);

let randomNumber = Math.random();
console.log(randomNumber); // random number between 0 and 1 (1 not included)

let randomNumberIntegerRange01 = Math.floor(Math.random() * 10);
console.log(randomNumberIntegerRange01); // random integer between 1 and 10 (10 not included)

let randomNumberIntegerRange02 = Math.floor(Math.random() * 10 + 1);
console.log(randomNumberIntegerRange02); // random integer between 1 and 10 (10 included)