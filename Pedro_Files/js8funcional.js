let temperatures = [12, 25, 14, -5, 18, 9, 27];
// Calcular a temperatura máxima, a temperatura mínima, a temperatura média, e temperatura mediana

// let tempMinima = temperatures[0];
let tempMinima = Infinity;
let tempMaxima = -Infinity;
let sum = 0;
for (let temperature of temperatures) {
    if (temperature > tempMaxima) {
        tempMaxima = temperature;
    }
    if (temperature < tempMinima) {
        tempMinima = temperature;
    }
    sum += temperature;
}
let tempMedia = sum / temperatures.length;

// let tempMinima = Math.min(...temperatures);
// let tempMaxima = Math.max(...temperatures);

let sortedArray = [...temperatures].sort((a, b) => a - b);
let tempMinima2 = sortedArray[0];
let tempMaxima2 = sortedArray[sortedArray.length - 1]
console.log("Temperatura mínima = " + tempMinima2);
console.log("Temperatura máxima = " + tempMaxima2);

console.log("Temperatura mínima = " + tempMinima);
console.log("Temperatura máxima = " + tempMaxima);
console.log("Temperatura média = " + tempMedia);

// extrair as temperaturas negativas
let negativeTemperatures = [];
for (let temperature of temperatures) {
    if (temperature < 0) {
        negativeTemperatures.push(temperature);
    }
}
console.log("Temperaturas negativas = ", negativeTemperatures);

// alternativa com programação funcional
// let negativeTemperatures2 = temperatures.filter(temperature => temperature < 0);
// let negativeTemperatures2 = temperatures.filter(temperature => {
//     return temperature < 0;
// });
// let negativeTemperatures2 = temperatures.filter(function (temperature) {
//     return temperature < 0;
// });
// let negativeTemperatures2 = temperatures.filter(function (temperature) {
//        if (temperature < 0 ) {
//            return true;
//        }
//        if (temperature >= 0 ) {
//            return false;
//        }
// });
let lowTemperatures = temperature => temperature < 0;
let negativeTemperatures2 = temperatures.filter(lowTemperatures);

console.log("Temperaturas negativas = ", negativeTemperatures2);

// extrair as temperaturas pares
let evenTemperatures = temperatures.filter(temperature => temperature % 2 === 0);
console.log("Temperaturas pares = ", evenTemperatures);

/*
métodos "declarativos" (programação funcional) para trabalhar com arrays

every
filter
find
findIndex
findLast
findLastIndex
flat
flatMap
forEach
map
reduce
reduceRight
some

*/

let numberList = [12, 250, 34, 78, 23, 87, 5];
// adicionar 5 unidades a cada elemento do array
let resultPlusFive = numberList.map(number => number + 5);
console.log(resultPlusFive); // [17, 255, 39, 83, 28, 92, 10]

let resultPlusFive2 = [];
for (let i = 0; i < numberList.length; i++) {
    resultPlusFive2.push(numberList[i] + 5)
}
console.log(resultPlusFive2);

// criar um novo array apenas com os nomes começados por "A" e convertê-los para maiúsculas
let students = ["Paulo", "Sílvia", "Lígia", "Alexandra", "Airton", "Ana João"];

// let studentsBegByA = students.filter(student => student.charAt(0) === "A"); // ["Alexandra", "Airton", "Ana João"]
let studentsBegByA = students
    .filter(student => student.startsWith("A"))
    .map(student => student.toUpperCase());
console.log(studentsBegByA); // ["ALEXANDRA", "AIRTON", "ANA JOÃO" ]

let studentsBegByA2 = [];
for (let student of students) {
    if (student.startsWith("A")) {
        studentsBegByA2.push(student.toUpperCase())
    }
}
console.log(studentsBegByA2);

// let numberList = [12, 250, 34, 78, 23, 87, 5];
let numberTotal = numberList.reduce((accumulator, number) => accumulator + number, 0);
// 0 é o valor inicial da variável accumulator
console.log(numberTotal); // 489

let numberTotal2 = 0;
for (let number of numberList) {
    numberTotal2 += number;
}
console.log(numberTotal2); // 489

let shoppingCart = [
    { product: "Gone with the wind", tipo: "book", preco: 14 },
    { product: "Footloose", tipo: "movie", preco: 25 },
    { product: "Scrum", tipo: "book", preco: 30 },
    { product: "Grease", tipo: "movie", preco: 35 }
]

// saber quanto é que tenho no carrinho, em euros, em livros - 44
let totalOrderBooks = shoppingCart
    .filter(item => item.tipo === "book")
    .map(item => item.preco)
    .reduce((accumulator, number) => accumulator + number, 0);
console.log(totalOrderBooks);

let totalOrderBooks2 = 0;
for (let item of shoppingCart) {
    if (item.tipo === "book") {
        totalOrderBooks2 += item.preco;
    }
}
console.log(totalOrderBooks2);

// tratar funções como parâmetros/argumentos
const sum2 = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const exponentiation = (a, b) => a ** b;

const calculation = (f, a, b) => f(a, b);

console.log(calculation(sum2, 3, 1)); // 4
console.log(calculation(subtraction, 4, 2)); // 2;
console.log(calculation(exponentiation, 4, 2)); // 16;