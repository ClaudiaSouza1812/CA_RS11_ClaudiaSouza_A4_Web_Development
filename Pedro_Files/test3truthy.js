let casado = true;
// if (casado===true) {
if (casado) {
    console.log("É casado");
} else {
    console.log("Não é casado");
}

// falsy values - 0, "", '', undefined, null, NaN
// truthy values - outros valores diferentes dos falsy values
let emptyString = "";
// if (emptyString === true) {
// if (emptyString !== "") {
if (emptyString) {
    console.log("Verdadeiro");
} else {
    console.log("Falso"); // <--
}