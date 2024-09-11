/*

Exercício 7

Criar uma função que simule o método repeat, isto é, recebe dois parâmetros, numRepeticoes e texto,

function repete(numRepeticoes, texto) {

e retorna o valor da variável "texto" repetido "numRepeticoes" vezes.
Para a seguinte invocação da função,

repete(3, "Primavera")

o resultado deverá ser:

PrimaveraPrimaveraPrimavera

Testar a função para valores diferentes das variáveis "repetições" e "texto".

*/


// function repete(numRepeticoes, texto) {
//     return console.log(texto.padEnd(texto.length * numRepeticoes, texto));
// }

function repete(numRepeticoes, texto) {
    let textoRepetido = '';
    for (let i = 1; i <= numRepeticoes; i++) {
        textoRepetido += texto;
    }
    // return textoRepetido;
    console.log(textoRepetido);
}

repete(5, "Perfeito!"); // Perfeito!Perfeito!Perfeito!Perfeito!Perfeito!
repete(20, "Genial!"); // Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!Genial!
repete(3, "Primavera"); // PrimaveraPrimaveraPrimavera
repete(200, "Ab"); // AbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAbAb
repete(3, "."); // ...
repete(1000, "."); // 

/*
Exercício 8

Gerar uma chave aleatória do euromilhões (5 números + 2 estrelas) - não podem existir números repetidos!

Os números podem variar entre 1 e 50, e as estrelas entre 1 e 12.

*/

// const numeros = new Set();
// while (numeros.size < qtd) {
//     const numero = Math.floor(Math.random() * (max - min + 1)) + min;
//     numeros.add(numero);
// }

let numeros = [];
while (numeros.length < 5) {
    let numeroRandom = Math.floor(Math.random() * 50) + 1;
    if (!numeros.includes(numeroRandom)) {
        numeros.push(numeroRandom);
    }
}
numeros.sort((a, b) => a - b);

let estrelas = [];
while (estrelas.length < 2) {
    let estrelaRandom = Math.floor(Math.random() * 12) + 1;
    if (!estrelas.includes(estrelaRandom)) {
        estrelas.push(estrelaRandom);
    }
}
estrelas.sort((a, b) => a - b);

let chaveCompleta = 'Chave do Euromilhões: ' + numeros + ' + ' + estrelas;

console.log(chaveCompleta);

/*

Exercício 11

Remova os números repetidos de um array.

Por exemplo, partindo do array,

[12,6,3,12,8,6,5] 

o resultado é:

[12,6,3,8,5]

Poderá remover os números repetidos do próprio array ou criar um novo array com os valores não repetidos.

*/

function removerRepetidos(array) {
    return [...new Set(array)];
}

const arrayRepetidos = [12, 6, 3, 12, 8, 6, 5];
const numerosUnicos = removerRepetidos(arrayRepetidos);
console.log(numerosUnicos);