// using js methods
function numberOfWords(sentence) {
    let words = sentence.split(" ");
    return words.length;
}

console.log(numberOfWords("Example of a sentence with words"));

// without using js methods
function numberOfWords02(sentence) {
    
    let numberOfWords = 1;

    for (let character of sentence) {
        if (character !== " ") {
            continue; 
        }
        numberOfWords++; 
    }
    return numberOfWords;
};
console.log(numberOfWords02("Example of a sentence, with words!"));