// function expression
const addNumbers = function (a, b) {
    return a + b;
}
let result = addNumbers(3, 4);
console.log(result); // 7

const addNumbers2 = (a, b) => {
    return a + b;
}
// const addNumbers2 = (a, b) => a + b;
let result2 = addNumbers2(3, 4);
console.log(result2); // 7

const addNumbers3 = (a, b) => {
    let result = a + b;
    return result;
}

// os parêntesis, nos parâmetros, só são obrigatórios qundo se recebe mais de um parâmetro
let square = number => number * number;
let result3 = square(2);
console.log(result3); // 4

// ou quando não se recebe nenhum parâmetro
let showMessage = () => console.log("Random message");
showMessage();

