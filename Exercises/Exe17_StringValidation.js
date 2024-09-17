function isValidString01(sentence) {
    sentence = sentence.trim();
    for (let i = 0; i < sentence.length; i++) {
        let charCode = sentence.charCodeAt(i);
        
        if (charCode >= 97 && charCode <= 122) {
            continue;
        }
        else if (charCode >= 65 && charCode <= 90) {
            continue;
        } else if (charCode === 32) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isValidString01(" Valide o conteúdo de uma string "));

function isValidString02(sentence) {
    sentence = sentence.trim();
    const pattern = /^[a-zA-Z\s]+$/;
    return pattern.test(sentence);
}

console.log(isValidString02(" Valide o conteudo de uma string "));