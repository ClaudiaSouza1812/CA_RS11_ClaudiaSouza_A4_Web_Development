
function biggestWord(sentence) {
    let words = sentence.split(" ");
    let wordLengths = [];

    words.forEach(word => {
        wordLengths.push(word.length);
    });
    
    let biggestWordIndex = wordLengths.indexOf(Math.max(...wordLengths));

    console.log(`"${words[biggestWordIndex]} - ${wordLenghts[biggestWordIndex]} letras"`); 
}

biggestWord("Exemplo de uma frase com palavras");

///replace(/[.,_-?!]/g, " ");

// ver problema de existir mais de uma palavra com o número maior de caracteres

