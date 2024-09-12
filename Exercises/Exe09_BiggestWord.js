
function biggestWordOne(sentence) {
    let words = sentence.split(" ");
    let wordLengths = [];

    words.forEach(word => {
        wordLengths.push(word.length);
    });
    
    let biggestWordIndex = wordLengths.indexOf(Math.max(...wordLengths));

    console.log(`"${words[biggestWordIndex]} - ${wordLengths[biggestWordIndex]} letras"`); 
}

biggestWordOne("Exemplo de uma frase com palavras");

///replace(/[.,_-?!]/g, " ");

// ver problema de existir mais de uma palavra com o número maior de caracteres

function biggestWordTwo(sentence) {
    sentence = sentence.trim().replace(/[^a-zA-Z\s]/g, "").split(/\s+/);
    let biggestWords = [], numberOfLetters = 0;

    for (let word of sentence) {
        if (word.length > numberOfLetters) {
            numberOfLetters = word.length;
            biggestWords = [word];
        }
        else if (word.length === numberOfLetters) {
            biggestWords.push(word);
        }
    }
    console.log(`The biggest word(s) is(are): "${biggestWords.join(" - ")}", with ${numberOfLetters} letters.`);
;}

biggestWordTwo(" Exemplos- de. frases, com_ #palavras! $ ");