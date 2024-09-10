let temperatures = [12, 25, 14, -5, 18, 9, 27];

// calculate the maximum temperature, minimun temperature, average temperature and 

let maxTemperature = Math.max(...temperatures);
console.log(maxTemperature);

let minTemperature = Math.min(...temperatures);
console.log(minTemperature);

let sumTemperatures = 0;

temperatures.forEach(temperature => {
    sumTemperatures = sumTemperatures + temperature;
});
let avgTemperature = sumTemperatures / temperatures.length;
console.log(avgTemperature);

let medianTemperature = 0;
let temperatures02 = [...temperatures].sort((a, b) => a - b); 

if (temperatures02.length % 2 === 0) {
    let middleIndex = temperatures02.length / 2 - 1;
    medianTemperature = temperatures02[middleIndex] + temperatures02[middleIndex + 1];
} else {
    let middleIndex = Math.floor(temperatures02.length / 2 + 1);
    medianTemperature = temperatures02[middleIndex];
}
console.log(medianTemperature);

// extract the negative temperatures
// functional programming alternative
let negativeTemperatures = temperatures.filter(temperature => temperature < 0);

let negativeTemperatures02 = temperatures.filter(temperature => {return temperature < 0;});

let negativeTemperatures03 = temperatures.filter(function (temperature) {return temperature < 0;});

let negativeTemperatures04 = temperatures.filter(function (temperature) {
    if (temperature < 0) {
        return true;
    }
    if (temperature >= 0) {
        return false;
    }
});

let lowTemperatures = temperature => temperature < 0;
console.log(negativeTemperatures);
