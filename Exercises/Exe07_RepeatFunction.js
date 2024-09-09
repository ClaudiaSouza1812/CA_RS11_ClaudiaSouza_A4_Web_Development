

function repeat(numRepetition, text) {
    let newText = "";
    if (numRepetition > 0 && numRepetition <= 10 && text.length > 0) {
        for (var i = 0; i < numRepetition; i++) {
            newText += text;
        }
        console.log(newText);
    }
    else {
        console.log("Enter a number bigger than 0 and smaller than 10, also enter a non empty string to repeat");
    }
}

repeat(3, "Primavera");