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


