// Exe 11 without using Set()

let numbers = [12,6,3,12,8,6,5];

for (let i = 0, j = i + 1; i < numbers.length - 1; j++) {
    if (numbers[i] === numbers[j]) {
        numbers.splice(j, 1);
    }
    if (j == numbers.length - 1) {
        i++;
        j = i;
    }
}

console.log(numbers);