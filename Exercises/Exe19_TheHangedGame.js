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

  function runHangedGame(word) {
    let choosedWord = word.split("");
    let attempts = setAttempts(choosedWord);
    let maskedWord = choosedWord.map(() => "_");
    let alreadyWon = false;
    console.log(maskedWord.join(" "));

    while (attempts > 0 || alreadyWon) {
        if (choosedWord.includes("_")) {
            let playerLetter = "";
            while (playerLetter.length !== 1) {
                playerLetter = prompt("Type a letter: ").toLowerCase();
            }

            if (choosedWord.includes(playerLetter)) {
                maskedWord = choosedWord.map(letter => letter === playerLetter ? letter : "_ ")
                console.log(maskedWord);
            } else {
                console.log(`The letter ${playerLetter} is not in the word`);
                attempts -= 1;
                console.log(maskedWord);
            }
        } else {
            alreadyWon = true;
            console.log(`The word is ${word}, congrats, you won!!!`);
            break;
        }
    }
    if (attempts === 0 &&!alreadyWon) {
    console.log(`The word was ${word}, better luck next time!`);
    }
    
  }

  runHangedGame(choosedWord);