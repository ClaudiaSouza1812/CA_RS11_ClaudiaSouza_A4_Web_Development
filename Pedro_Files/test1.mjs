export function isLeapYear(ano) {
    if (ano % 4 === 0) {
        if (ano % 100 === 0) {
            if (ano % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false