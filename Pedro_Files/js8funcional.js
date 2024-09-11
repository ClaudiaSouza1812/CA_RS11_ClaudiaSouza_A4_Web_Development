let temperatures = [12, 25, 14, -5, 18, 9, 27];
// Calcular a temperatura máxima, a temperatura mínima, a temperatura média, e temperatura mediana

// let tempMinima = temperatures[0];
let tempMinima = Infinity;
let tempMaxima = -Infinity;
let sum = 0;
for (let temperature of temperatures) {
    if (temperature > tempMaxima) {
        tempMaxima = temperature;
    }
    if (temperature < tempMinima) {
        tempMinima = temperature;
    }
    sum += temperature;
}
let tempMedia = sum / temperatures.length;

// let tempMinima = Math.min(...temperatures);
// let tempMaxima = Math.max(...temperatures);

let sortedArray = [...temperatures].sort((a, b) => a - b);
let tempMinima2 = sortedArray[0];
let tempMaxima2 = sortedArray[sortedArray.length - 1]
console.log("Temperatura mínima = " + tempMinima2);
console.log("Temperatura máxima = " + tempMaxima2);

console.log("Temperatura mínima = " + tempMinima);
console.log("Temperatura máxima = " + tempMaxima);
console.log("Temperatura média = " + tempMedia);

// extrair as temperaturas negativas
let negativeTemperatures = [];
for (let temperature of temperatures) {
    if (temperature < 0) {
        negativeTemperatures.push(temperature);
    }
}
console.log("Temperaturas negativas = ", negativeTemperatures);

// alternativa com programação funcional
// let negativeTemperatures2 = temperatures.filter(temperature => temperature < 0);
// let negativeTemperatures2 = temperatures.filter(temperature => {
//     return temperature < 0;
// });
// let negativeTemperatures2 = temperatures.filter(function (temperature) {
//     return temperature < 0;
// });
// let negativeTemperatures2 = temperatures.filter(function (temperature) {
//        if (temperature < 0 ) {
//            return true;
//        }
//        if (temperature >= 0 ) {
//            return false;
//        }
// });
let lowTemperatures = temperature => temperature < 0;
let negativeTemperatures2 = temperatures.filter(lowTemperatures);

console.log("Temperaturas negativas = ", negativeTemperatures2);

// extrair as temperaturas pares
let evenTemperatures = temperatures.filter(temperature => temperature % 2 === 0);
console.log("Temperaturas pares = ", evenTemperatures);