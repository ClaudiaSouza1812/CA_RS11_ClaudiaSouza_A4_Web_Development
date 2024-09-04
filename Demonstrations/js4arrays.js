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

// clonar array - slice

