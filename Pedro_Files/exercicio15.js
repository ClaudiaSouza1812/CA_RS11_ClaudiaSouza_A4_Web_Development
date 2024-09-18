/*

Partindo do seguinte array de objectos,

let pessoas=[
 { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
 { nome: "Luísa Xavier", localidade: "Lisboa"},
 { nome: "Mário Simões", localidade: "Aveiro"},
 { nome: "Joana Castro", localidade: "Santa Maria da Feira"},
 { nome: "Guilherme Silveira", localidade: "Lisboa"},
 { nome: "Pedro Oliveira", localidade: "Ermesinde"}
]

Criar um novo array com as localidades de cada pessoa, mas não permitindo a existência de localidades repetidas.

O resultado deverá aparecer ordenado por ordem alfabética:

["Aveiro","Ermesinde","Lisboa","Santa Maria da Feira"]
Desenhar o algoritmo de forma que funcione para qualquer número de pessoas.

*/

let pessoas = [
    { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
    { nome: "Luísa Xavier", localidade: "Lisboa" },
    { nome: "Mário Simões", localidade: "Aveiro" },
    { nome: "Joana Castro", localidade: "Santa Maria da Feira" },
    { nome: "Guilherme Silveira", localidade: "Lisboa" },
    { nome: "Pedro Oliveira", localidade: "Ermesinde" }
]

// Function declaration
function checkCity(pessoa) {
    // if (localidades02.find(localidade => localidade === pessoa.localidade) === undefined) {
    if (!localidades.includes(pessoa.localidade)) {
        localidades.push(pessoa.localidade);
    }
}

// Processing 
let localidades = [];
pessoas.forEach(checkCity);

// Output
console.log(localidades.sort());

// Alternativa

function sortLocalidades(a, b) {
    return a.localeCompare(b);
}

let novoArrayPessoas = pessoas.map(person => person.localidade).reduce((accumulator, localidade) => accumulator.includes(localidade) ? accumulator : [...accumulator, localidade], []).sort(sortLocalidades);

console.log(novoArrayPessoas); // ["Aveiro", "Ermesinde", "Lisboa", "Santa Maria da Feira"]

// Alternativa 2

function localidadesPessoas(pessoas) {
    let localidadesUnicas = new Set(pessoas.map(pessoa => pessoa.localidade));

    return [...localidadesUnicas].sort();
}
console.log(localidadesPessoas(pessoas));

// Alternativa 3

function removeDuplicates(array) {
    let sortedArray = array.sort((a, b) => a.localidade.localeCompare(b.localidade));

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j].localidade === sortedArray[i].localidade) {
                sortedArray.splice(j, 1);
            }
        }
    }

    let newArr = [];
    for (let i = 0; i < sortedArray.length; i++) {
        newArr[i] = sortedArray[i].localidade;
    }

    return newArr;

}
console.log(removeDuplicates(pessoas));