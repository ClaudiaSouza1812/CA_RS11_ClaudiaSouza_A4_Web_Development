
function biggestWord(sentence) {
    let words = sentence.split(" ");
    let wordLenghts = [];

    words.forEach(word => {
        wordLenghts.push(word.length);
    });
    
    let biggestWordIndex = wordLenghts.indexOf(Math.max(...wordLenghts));

    console.log(`"${words[biggestWordIndex]}"`, "-", wordLenghts[biggestWordIndex], "letras"); 
}

biggestWord("Exemplo de uma frase com palavras");