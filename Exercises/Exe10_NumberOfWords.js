// using js methods
function numberOfWords(sentence) {
    // trim() removes whitespace in the beginning and end of the sentence
    // replace(/\s+/g, " ") replaces multiple spaces with a single space
    // regex \s means whitespace
    // regex + means one or more spaces occurrences
    // regex g means 'global' all occurrences
    // split(" ") splits the sentence into an array of words, where each word is an element in the array
    // length property returns the number of elements in the array, which is the number of words in the sentence
    let words = sentence.replace(/\s+/g, " ").trim().split(" ");
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