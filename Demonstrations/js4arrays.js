// array literal

let studentNames01 = ["Alexandra", "Ana João", "Martim", "Thiago"];

console.log(studentNames01);
console.log(studentNames01.toString());
console.table(studentNames01);

let studentNames02 = new Array("Alexandra", "Ana João", "Martim", "Thiago");

// criar array vazio
let studentNames03 = [];
let studentNames04 = new Array();

// aceder a um elemento do array
console.log(studentNames01[1]);

// adicionar elemento ao array
// adicionar ai fim
studentNames01[4] = "Paulo Melo";
console.table(studentNames01);
studentNames01[studentNames01.length] = "João Oliveira";
console.table(studentNames01);
studentNames01.push("Silvia Almeida");
console.log(studentNames01);

// adicionar ao início
studentNames01.unshift("João Araújo"); // insert new elements at the start of an array, return the new length of the array
console.table(studentNames01);

// calculate the number of elements of an array
let arraySize = studentNames01.length;
console.log("Array Size: ", arraySize);

// percorrer um array 

studentNames01.forEach(element => {
    console.log(element);
});

for (let i = 0; i < arraySize - 1; i++) {
    console.log(studentNames01[i]);
}

for (let student of studentNames01) {
    console.log(student);
} 

// extrair / ler mais de um elemento de um array
//slice(first_position, last_position)
// extrair os dois primeiros nomes da lista de estudantes
let firstTwoStudentNames = studentNames01.slice(0, 2);
console.table(firstTwoStudentNames);
let lastTwoStudentNames = studentNames01.slice(-2);
console.table(lastTwoStudentNames);
let lastTwoStudentNames02 = studentNames01.slice(studentNames01.length - 2);
console.table(lastTwoStudentNames02);

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

// clonar array - slice
let temperatures3 = temperatures.slice();
console.log(temperatures3);
temperatures3.push(30);
console.log(temperatures3);

// utilizando spread operator (...) - cria uma lista de valores
let temperatures4 = [...temperatures];
console.log(temperatures4);

let temperatures5 = [];
for (let temperature of temperatures) {
    temperatures5.push(temperature);
}

// using the From method
let temperatures6 = Array.from(temperatures);

const marks = [8, 12, 17, 19, 4, 10];
marks.push(20);
marks[3] = -5;
console.log(marks);

// marks = [8, 12, 17, 19, 4, 10]; // Error, assignment to a constant variable

// the sort() method is mutable, changing the original array
// ascendent order
let sortedTemperatures = [...temperatures].sort((a, b) => a - b);
// descendent order
//let sortedTemperatures = [...temperatures].sort((a, b) => b - a);

// same as above:
/*
let sortedTemperatures = [...temperatures].sort(function (a, b) {
    if (a - b <= 0) {
        return -1; // não mexe
    }
    if (a - b > 0) {
        return 1; // mexe
    }
}
*/
console.log(sortedTemperatures);

//temperatures.reverse() // mutable method - change the original array;
//console.log(temperatures);
// ideally:
let invertedArray = [...temperatures].reverse();

// multidimentionals arrays (matrix)

let cities = [];

cities.push(["Porto", "Lisbon"]);
cities.push(["Madrid", "Barcelona", "Valencia"]);
cities.push(["Paris", "Lyon", "Marseille", "Tours"]);

console.table(cities);

let countries = [];

countries.push(["Portugal",["Porto", "Lisbon"]]);
countries.push(["Spain", ["Madrid", "Barcelona", "Valencia"]]);
countries.push(["France", ["Paris", "Lyon", "Marseille", "Tours"]]);

console.table(countries);
console.log(countries[2]); // ["France",]
console.log(countries[2][1]); // ["Paris", "Lyon", "Marseille", "Tours"]
console.log(countries[2][1][3]); // Tours

const studentsMarks = [8, 12, 17, 19, 4, 10];

studentsMarks.push(13);
console.log(studentsMarks);
studentsMarks.unshift(-4);
console.log(studentsMarks);

// insert data in the middle
// splice - method overload - pode inserir, substituir ou eliminar elements de um array
// 0 - significa que vamos inserir elementos
studentsMarks.splice(4, 0, 13, 12);
console.log(studentsMarks); 

// substituir elementos
studentsMarks[0] = 10;
console.log(studentsMarks); 
studentsMarks.splice(2, 1, 7);
console.log(studentsMarks);

// delete elements
// from the end

let deletedElement = studentsMarks.pop();
console.log(deletedElement);
console.log(studentsMarks);

// delete from the beginning
let deletedElement02 = studentsMarks.shift();
console.log(deletedElement02);
console.log(studentsMarks);

// delete elements from the middle
let deletedElement03 = studentsMarks.splice(3, 2);
console.log(deletedElement03);
console.log(studentsMarks);  



