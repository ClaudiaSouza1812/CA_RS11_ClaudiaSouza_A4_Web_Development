// array literal
let studentNames = ["Alexandra", "Ana João", "Martim", "Thiago"];
console.log(studentNames);
console.log(studentNames.toString()); // Alexandra,Ana João,Martim,Thiago
console.table(studentNames);
let studentNames2 = new Array("Alexandra", "Ana João", "Martim", "Thiago");

// criar um array vazio
let emptyArray = [];
let emptyArray2 = new Array();

// aceder a um elemento do array
console.log(studentNames[1]); // "Ana João"

// adicionar um elemento ao array
// adicionar ao fim
studentNames[4] = "Paulo Melo";
console.table(studentNames);
studentNames[studentNames.length] = "João Oliveira";
console.table(studentNames);
studentNames.push("Sílvia Almeida");
console.table(studentNames);

// adicionar ao início
studentNames.unshift("João Araújo"); // unshift inserts new elements at the start of an array, and returns the new length of the array.
console.table(studentNames);

// calcular o número de elementos de um array
let arraySize = studentNames.length;
console.log("Tamanho do array: " + arraySize); // 8

// iterar / percorrer um array
for (let pos = 0; pos < studentNames.length; pos++) {
    console.log(studentNames[pos]);
}
for (let student of studentNames) {
    console.log(student);
}
// studentNames.forEach(student => console.log(student));
studentNames.forEach(function (student) {
    console.log(student);
});

// "extrair"/ler mais de um elemento de um array
// slice(first_position, last_position)
// extrair os dois primeiros nomes da lista de estudantes
let firstTwoStudentNames = studentNames.slice(0, 2);
console.log(firstTwoStudentNames); // ["João Araújo","Alexandra"]
let lastTwoStudentNames = studentNames.slice(-2);
console.log(lastTwoStudentNames); // ['João Oliveira', 'Sílvia Almeida']
// let lastTwoStudentNames2 = studentNames.slice(studentNames.length - 2, studentNames.length);
let lastTwoStudentNames2 = studentNames.slice(studentNames.length - 2);
console.log(lastTwoStudentNames2);

let temperatures = [4, 3, 10, 15, -4, 27, 40];
console.log(temperatures);
let temperatures2 = temperatures;
console.log(temperatures2);
temperatures2.push(27);
console.log(temperatures2);
console.log(temperatures);

let a = 4;
let b = a;
console.log(b);
a = 10;
console.log(b);

// clonar um array
let temperatures3 = temperatures.slice();
// let temperatures3 = temperatures.slice(0);
// utilizando o spread operator (...) - cria uma lista de valores
let temperatures4 = [...temperatures];
// utilizando um ciclo
let temperatures5 = [];
for (let temperature of temperatures) {
    temperatures5.push(temperature);
}
// utilizando o método from
let temperatures6 = Array.from(temperatures);

const marks = [8, 12, 17, 19, 4, 10];
marks.push(20);
marks[3] = -5;
console.log(marks);
// marks = [8, 12, 17, 19, 4, 10]; // Assignment to constant variable.

// o método sort() é mutable
// let sortedTemperatures = temperatures.sort();
// console.log(temperatures); // [-4, 10, 15, 27, 27, 3, 4, 40]
let sortedTemperatures = [...temperatures].sort();
console.log(sortedTemperatures); // [-4, 10, 15, 27, 27, 3, 4, 40]
// ordem ascendente
// let sortedTemperatures2 = [...temperatures].sort((a, b) => a - b);
// ordem descendente
// let sortedTemperatures2 = [...temperatures].sort((a, b) => b - a);
let sortedTemperatures2 = [...temperatures].sort(function (a, b) {
    if (a - b <= 0) {
        return -1; // não mexe
    }
    if (a - b > 0) {
        return 1;
    }
});
console.log(sortedTemperatures2); // [-4, 3, 4, 10, 15, 27, 27, 40]

// temperatures.reverse(); // mutable method - altera o array original
// console.log(temperatures);
// idealmente:
let invertedArray = [...temperatures].reverse();

// arrays multidimensionais
let cities = [];
cities.push(["Porto", "Lisboa"]);
cities.push(["Madrid", "Barcelona", "Valencia"]);
cities.push(["Paris", "Lyon", "Marseille", "Tours"]);
console.log(cities);
console.table(cities);

let countries = [];
countries.push(["Portugal", ["Porto", "Lisboa"]])
countries.push(["Espanha", ["Madrid", "Barcelona", "Valencia"]])
countries.push(["França", ["Paris", "Lyon", "Marseille", "Tours"]])
console.table(countries);
console.log(countries[2]); // ["França", ["Paris", "Lyon", "Marseille", "Tours"]]
console.log(countries[2][1]); // ["Paris", "Lyon", "Marseille", "Tours"]
console.log(countries[2][1][3]); // Tours

const studentsMarks = [8, 12, 17, 19, 4, 10];
studentsMarks.push(13);
console.log(studentsMarks); // [8, 12, 17, 19, 4, 10, 13]
studentsMarks.unshift(-4);
console.log(studentsMarks); // [-4, 8, 12, 17, 19, 4, 10, 13]
// inserir a meio
// splice - method overload - pode inserir, substituir ou eliminar elementos de um array
// 0 - significa que vamos inserir elementos
studentsMarks.splice(4, 0, 13, 12);
console.log(studentsMarks); // [-4, 8, 12, 17, 13, 12, 19, 4, 10, 13]

// substituir elementos
studentsMarks[0] = 10;
console.log(studentsMarks); // [10, 8, 12, 17, 13, 12, 19, 4, 10, 13]
studentsMarks.splice(2, 1, 7);
console.log(studentsMarks); // [10, 8, 7, 17, 13, 12, 19, 4, 10, 13]

// eliminar elementos
// eliminar do fim
let deletedElement = studentsMarks.pop();
console.log(deletedElement); // 13
console.log(studentsMarks); // [10, 8, 7, 17, 13, 12, 19, 4, 10]
// eliminar do início
let deletedElement2 = studentsMarks.shift();
console.log(deletedElement2); // 10
console.log(studentsMarks); // [8, 7, 17, 13, 12, 19, 4, 10]
// eliminar do meio
let deletedElement3 = studentsMarks.splice(3, 2);
console.log(deletedElement3); // [ 13, 12 ]
console.log(studentsMarks); // [8, 7, 17, 19, 4, 10]