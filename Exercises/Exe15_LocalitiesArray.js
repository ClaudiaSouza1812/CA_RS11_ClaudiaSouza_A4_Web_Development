// First Aproach
// Function declaration
function checkLocalityUsingInclude(pessoa) {
    if (!localidades01.includes(pessoa.localidade)) {
        localidades01.push(pessoa.localidade);
    }
}

// Data set
let pessoas = [
    { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
    { nome: "Luísa Xavier", localidade: "Lisboa"},
    { nome: "Mário Simões", localidade: "Aveiro"},
    { nome: "Joana Castro", localidade: "Santa Maria da Feira"},
    { nome: "Guilherme Silveira", localidade: "Lisboa"},
    { nome: "Pedro Oliveira", localidade: "Ermesinde"}
];

// Processing 
let localidades01 = [];
pessoas.forEach(pessoa => checkLocalityUsingInclude(pessoa)); 

// Output
console.log(localidades01.sort());

let localidades02 = [];

pessoas.forEach(pessoa => {
    if (localidades02.find(localidade => localidade === pessoa.localidade) === undefined) {
        localidades02.push(pessoa.localidade);
    }
});

console.log(localidades02.sort());

function checkLocalityUsingSet(pessoas) {
    let uniqueLocalities = new Set(pessoas.map(pessoa => pessoa.localidade));
    return uniqueLocalities;
}

console.log(checkLocalityUsingSet());
