
function convertUpperCase(sentence) {
    let upperCaseSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let charCode = sentence.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            upperCaseSentence += sentence[i];
        }
        else if (charCode >= 97 && charCode <= 122) {
            upperCaseSentence += String.fromCharCode(charCode - 32);
        }
        else {
            upperCaseSentence += sentence[i];
        }
    }
    return upperCaseSentence;
}

let convertedString = convertUpperCase("Pedro Remoaldo");
console.log(convertedString);
