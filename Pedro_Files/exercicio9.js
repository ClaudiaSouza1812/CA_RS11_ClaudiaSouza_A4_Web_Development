/*
Exercício 9

Criar uma função que permita identificar a maior palavra existente numa frase e o respectivo número de caracteres.

function maiorPalavra(texto) {

para a seguinte invocação,

maiorPalavra("Exemplo de uma frase com palavras");

deve apresentar como resultado

"palavras" - 8 letras

Podem utilizar métodos de strings de JavaScript.

*/

function biggestWord(sentence) {
    let words = sentence.split(" ");
    let wordLenghts = [];

    words.forEach(word => {
        wordLenghts.push(word.length);
    });

    let biggestWord = Math.max(...wordLenghts);
    let biggestWordIndex = wordLenghts.indexOf(biggestWord);

    // console.log(`"${words[biggestWordIndex]} - ${wordLenghts[biggestWordIndex]} letras"`);
    console.log(`"${words[biggestWordIndex]} - ${biggestWord} letras"`);
}

biggestWord("Exemplo de uma frase com palavras");

function maiorPalavra(texto) {
    let palavras = texto.split(" ");

    let palavraMaior = "";

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > palavraMaior.length) {
            palavraMaior = palavras[i];
        }
    }

    return `${palavraMaior} - ${palavraMaior.length} letras`;
}

maiorPalavra("Exemplo de uma frase com palavras");

// ver problema de existir mais de uma palavra com o número maior de caracteres