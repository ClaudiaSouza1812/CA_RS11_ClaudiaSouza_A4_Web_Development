
let temperatures = [12, 25, 14, -5, 18, 9, 27];

let medianTemperature = 0;

let temperatures02 = [...temperatures].sort((a, b) => a - b); 

if (temperatures02.length % 2 === 0) {
    let middleIndex = temperatures02.length / 2 - 1;
    medianTemperature = (temperatures02[middleIndex] + temperatures02[middleIndex + 1]) / 2;
} else {
    let middleIndex = Math.floor(temperatures02.length / 2);
    medianTemperature = temperatures02[middleIndex];
}
console.log(temperatures02);
console.log(medianTemperature);