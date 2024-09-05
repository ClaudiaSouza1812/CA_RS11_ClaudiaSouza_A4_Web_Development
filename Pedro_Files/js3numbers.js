// tipo de dados numérico: Number
// internamente o JavaScript armazena todos os números como floating-points
// tipos de números em JavaScript:
/*
123
123.456
4.3456e+12
7.5432E-54
*/
/*

Numeral system

base 10 (decimal) - 0-9
base 2 (binário) - 01
    0b1111
base 8 (octal) - 0-7
    0123
base 16 (hexadecimal) - 0-9A-F
    0xaf34

*/

let total = 0.2 + 0.1;
console.log(total); // 0.30000000000000004

// 0.25+0.34 = 0.5900000000000001

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
let total6 = +total3;
console.log(typeof total6); // number

let a = 2 + "3" + 4;
console.log(a); // 234
let b = 2 + 3 + "4";
console.log(b); // 54
let c = "2" + 3 + 4;
console.log(c); // 234
let d = 2 + 3 + 4;
console.log(d); // 9

// Infinity, -Infinity, NaN (Not a Number)
console.log(1 / 0); // Infinity
console.log(1 / "qwerty"); // NaN

if (Number.isNaN(1 / "qwerty")) {
    console.log("Não é um número");
}

// typeof NaN
// 'number'

let valor1 = 12 / 5;
let valor2 = 12 / 6;
if (Number.isInteger(valor1)) {
    console.log("É um número inteiro");
} else {
    console.log("Não é um número inteiro");
}
if (Number.isInteger(valor2)) {
    console.log("É um número inteiro");
} else {
    console.log("Não é um número inteiro");
}

let numero1 = 12;
let numero2 = new Number(12);
console.log(numero1); // 12
console.log(numero2.toString()); // 12
console.log(typeof numero2); // object

// Math library/namespace

console.log(Math.PI); // 3.141592653589793
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

let maximo = Math.max(4, 3, 10, 234, -4, 56); // 234
console.log(maximo);
let minimo = Math.min(4, 3, 10, 234, -4, 56); // -4
console.log(minimo);

let valorArredondar = 3.1415;
let arredondarParaCima = Math.ceil(valorArredondar);
console.log(arredondarParaCima); // 4
let arredondarParaBaixo = Math.floor(valorArredondar)
console.log(arredondarParaBaixo); // 3
let arredondarMatematicamente = Math.round(valorArredondar);
console.log(arredondarMatematicamente); // 3

let randomNumber = Math.random(); // gera números aleatórios entre 0 e 1 (não inclusivé)
console.log(randomNumber); // por exemplo: 0.1739116936558731
let randomNumberRange = Math.random() * 10; // gera números aleatórios entre 0 e 10 (não inclusivé)
console.log(randomNumberRange); // por exemplo - 8.885209555898008
let randomIntegerNumber = Math.floor(Math.random() * 10 + 1); // gera números aleatórios inteiros entre 1 e 10 (inclusivé)
console.log(randomIntegerNumber); // por exemplo - 5