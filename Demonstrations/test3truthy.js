let casado = true;
if (casado) {
    console.log("Você é casado.");
} else {
    console.log("Você não é casado.");
}

// falsy values - 0, "", '', undefined, null, NaN, false, -0, 0n
// truthy values - all other values different of falsy values
let emptyString = "";
if (emptyString) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}