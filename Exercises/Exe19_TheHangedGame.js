words = [
    // 5 letters
    "apple", "beach", "cloud", "dance", "eagle",
    // 6 letters
    "flower", "garden", "harbor", "island", "jungle",
    // 7 letters
    "kitchen", "lantern", "mystery", "network", "octopus",
    // 8 letters
    "paradise", "question", "rainbow", "sunshine", "treasure",
    // 9 letters
    "adventure", "butterfly", "chocolate", "discovery", "elephants",
    // 10 letters
    "friendship", "generation", "helicopter", "innovation", "journalism",
    // 11 letters
    "kaleidoscope", "lighthouse", "magnificent", "negotiation", "opportunity",
    // 12 letters
    "photography", "quarterback", "reservation", "subscription", "temperature"
];

let choosedWord = words[Math.floor(Math.random() * 40)];

function setAttempts(word) {
    let attempts = 0;
    if (word.length === 5) {
        attempts = 5;
    } else if (word.length >= 6 && word.length <= 7) {
        attempts = 4;
    } else {
        attempts = 3;
    }
    return attempts;
}

function capitalizeFirstLetter(word) {
    word[0] = word[0].toUpperCase();
    return word;
}

function getPlayerLetter() {
    let playerLetter = "";
    while (playerLetter.length !== 1) {
        playerLetter = prompt("Type a letter: ").toLowerCase();
    }
    return playerLetter;
}

function checkPlayerLetter(playerLetter) {
    return choosedWord.includes(playerLetter);
}

function decryptWord(maskedWord, playerLetter) {
    maskedWord = choosedWord.map(letter => letter === playerLetter ? letter : maskedWord[choosedWord.indexOf(letter)]);
    if (maskedWord[0].charCodeAt(0) >= 97 && maskedWord[0].charCodeAt(0) <= 122) {
        maskedWord = capitalizeFirstLetter(maskedWord);
    }
    return maskedWord;
}

function runHangedGame(word) {

    let choosedWord = word.split("");
    let attempts = setAttempts(choosedWord);
    let maskedWord = choosedWord.map(() => "_");
    let alreadyWon = false;

    console.log(`Try to discover the word before you run out of attempts: (${attempts}).`);
    console.log(maskedWord.join(" "));

    while (attempts > 0 || alreadyWon) {
        if (maskedWord.includes("_")) {
            let playerLetter = getPlayerLetter();

            if (checkPlayerLetter(playerLetter)) {
                maskedWord = decryptWord(maskedWord, playerLetter);
                console.log(maskedWord.join(" "));
            } else {
                attempts -= 1;
                console.log(`The letter "${playerLetter}" is not in the word. Attempts left: (${attempts}).`);
                console.log(maskedWord.join(" "));
            }
        } else {
            alreadyWon = true;
            console.log(`The word is "${maskedWord}", congrats, you won!!!`);
        }
    }
    if (attempts === 0) {
    console.log(`The word was "${capitalizeFirstLetter(word)}", better luck next time!`);
    }
}

runHangedGame(choosedWord);