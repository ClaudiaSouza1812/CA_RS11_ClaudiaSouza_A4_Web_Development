
let temperatures = [12, 25, 14, -5, 18, 9, 27];
// calculate the maximum temperature, minimun temperature, average temperature and 

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
    medianTemperature = temperatures02[middleIndex] + temperatures02[middleIndex + 1] / 2;
} else {
    let middleIndex = Math.floor(temperatures02.length / 2);
    medianTemperature = temperatures02[middleIndex];
}
console.log(medianTemperature);

// extrair as temperaturas negativas
/*
let negativeTemperatures01 = [];
for (let temperature of temperatures) {
    if (temperature < 0) {
        negativeTemperatures.push(temperature);
    }
}
console.log("Temperaturas negativas = ", negativeTemperatures);
*/
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


console.log("Temperaturas negativas = ", negativeTemperatures02);

// extrair as temperaturas pares
let evenTemperatures = temperatures.filter(temperature => temperature % 2 === 0);
console.log("Temperaturas pares = ", evenTemperatures);

/*
declarative methods (functional programming) for working with arrays

every
filter
find
findIndex
flat
flatMap
forEach
map
reduce
reduceRight
some

* */

let numberList = [12, 250, 34, 78, 23, 87, 5]
// add 5 to each element in the list
let resultPlusFive = numberList.map(number => number + 5);
console.log(resultPlusFive); // [17, 255, 39, 83, 28, 92, 10]

let resultPlusFive02 = [];
numberList.forEach(number => resultPlusFive02.push(number + 5)); // [17, 255, 39, 83, 28, 92, 10]
console.log(resultPlusFive02);

let students = ["Paulo", "Sílvia", "Lígia", "Alexandra", "Airton", "Ana João"];

let studentsWithLetterA = students.filter(student => student[0] === "A").map(student => student.toUpperCase());

console.log(studentsWithLetterA);

// let studentsWithLetterA = students.filter(student => student.charAt(0) === "A").map(student => student.toUpperCase());
// let studentsWithLetterA = students.filter(student => student.startsWith("A")).map(student => student.toUpperCase());

/*
for (let student of students) {
    if (student.startsWith("A")) {
        studentsWithLetterA.push(student.toUpperCase());
    }
}
console.log(studentsWithLetterA);
*/
