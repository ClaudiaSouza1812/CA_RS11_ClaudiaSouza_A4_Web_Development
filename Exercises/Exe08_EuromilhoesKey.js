
function euromilhoesKey() {
    let key = {
        numbers: [], 
        stars: []
    }

    while (key.stars.length < 2) {
        let randomStar = Math.floor((Math.random() * 12) + 1);
        if (!key.stars.includes(randomStar)) {
            key.stars.push(randomStar);
        }
    }

    while (key.numbers.length < 5) {
        let randomNumber = Math.floor((Math.random() * 50) + 1);
        if (!key.numbers.includes(randomNumber)) {
            key.numbers.push(randomNumber);
        }
    }
    return key;
}

console.log(euromilhoesKey());