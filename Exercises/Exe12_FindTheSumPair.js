// Exe_12

let numbers = [1, 2, 4, 4];
let sum = 8;

for (let i = 0, j = i + 1; i < numbers.length - 1; j++) {
    if (numbers[i] + numbers[j] === sum) {
        return console.log(`The pair ${numbers[i]} + ${numbers[j]} is equal to ${sum}.`);
    }
    if (j == numbers.length - 1) {
        i++;
        j = i;
    }
    if (i == numbers.length - 1 && j == numbers.length - 1) {
        console.log("No two numbers sum up to 8.");
        return;
    }
    continue;
}