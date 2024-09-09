// DRY - Don't Repeat Yourself
// Functions
// - evitam repetição de código
// - tornam o código mais legível
// - permitem a reutilização de código

// function declaration - o JavaScript faz hoisting de funções
function merryChristmas() {
    console.log("Merry Christmas!");
}
// message é um parâmetro
function showMessage(message) {
    console.log(message);
}
function addNumbers(a, b) {
    return a + b;
}

// invocar uma função
merryChristmas();
// "Bem-vindo" é um argumento
showMessage("Bem-vindo");
let result = addNumbers(3, 4);
console.log(result); // 7
// pode-se utilizar dentro de expressões, funções que retornam valores
let result2 = 3 + addNumbers(3, 4) + 7;
console.log(result2); // 17

// function expression
const addNumbers2 = function (a, b) {
    return a + b;
}
let result3 = addNumbers2(3, 4);
console.log(result3); // 7

// scope
// global scope
// como a variável "ano" é declarada globalmente, está acessível a partir de qualquer parte do programa
let ano = 2024;
function mostraAno() {
    return ano;
}
console.log(mostraAno()); // 2024

// local scope
function addNumbers3(a, b) {
    // as variáveis a e b só existem dentro desta função
    return a + b;
}
// function multiplyNumbers3(a, b) {
function mostraAno2(ano) {
    return ano;
}
console.log(mostraAno2(2023)); // 2023
function mostraAno3() {
    // a instrução seguinte altera a variável global "ano"
    ano = 2023;
    return ano;
}
console.log(mostraAno3()); // 2023
console.log(ano); // 2023
function mostraAno4() {
    // a instrução seguinte cria uma variável global chamada "aon"
    aon = 2023;
    return ano;
}
console.log(mostraAno4()); // 2023
console.log(aon); // 2023
// correcto
function mostraAno5() {
    let ano = 2023;
    return ano;
}

// redeclarar uma função utilizando uma function declaration substitui a declaração anterior dessa função - isto não acontece com uma function expression, já que aparecerá um erro se tentermos redeclarar uma função

// block scope

// if (5 > 4) {
//     let msg = "maior";
// } else {
//     let msg = "menor";
// }
// console.log(msg); // msg is not defined
// as variáveis definidas com let são block scope - só existem dentro do bloco de comandos (limitado por {}) em que são definidas

// resolução do problema
let msg;
if (5 > 4) {
    msg = "maior";
} else {
    msg = "menor";
}
console.log(msg);

// forma antiga de resolver o problema
// as variáveis definidas com var são function/local scope ou global scope
if (5 > 4) {
    var msg2 = "maior";
} else {
    var msg2 = "menor";
}
console.log(msg2);

let msg3 = 5 > 4 ? 'maior' : 'menor';
