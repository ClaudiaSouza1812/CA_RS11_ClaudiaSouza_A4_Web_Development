let yearsList = [2004, 400, 500, 600, 800, 1200, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400];

yearsList.forEach(year => {
    let isLeapYear = checkLeapYear(year);
    if (isLeapYear) {
        console.log(`${year} is a leap year.`)
    }
    else {
        console.log(`${year} is not a leap year.`)
    }
});

function checkLeapYear(year) {
    if (year % 4 != 0) {
        return false;
    }
    if (year % 100 != 0) {
        return true;
    }
    if (year % 400 != 0) {
        return false;
    }
    return true;
}

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year)) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
    }