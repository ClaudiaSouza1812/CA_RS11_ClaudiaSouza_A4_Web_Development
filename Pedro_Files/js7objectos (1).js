let person1 = ["Alexandra Mendes", 30, "Leiria", false];
// literal object
let person2 = {
    // pares chave/valor - key/values pairs
    nome: "Alexandra Mendes",
    idade: 30,
    localidade: "Leiria",
    casada: false
    // numero_de_filhos
    // numeroFilhos
    // "numero de filhos"
}
console.log(person2.nome); // Alexandra Mendes

let property = "nome";
console.log(person2.property); // undefined
console.log(person2[property]); // Alexandra Mendes
console.log(person2["nome"]); // Alexandra Mendes

// shallow-iteration
for (let property in person2) {
    console.log(`${property}=${person2[property]}`)
}
// resultado:
/*
nome=Alexandra Mendes
idade=30
localidade=Leiria
casada=false
*/

// destructuring
// let [key, value] = [Object.entries(person2)[0][0], Object.entries(person2)[0][1]];

for (const [key, value] of Object.entries(person2)) {
    console.log(`${key}=${value}`);
}

console.log(person2.hasOwnProperty("nome")); // true
console.log(person2.hasOwnProperty("morada")); // false

console.log("---------------------");

function showInfo(infoPerson) {
    console.log(`A ${infoPerson.nome.toUpperCase()} mora em ${infoPerson.localidade}.`);
}
showInfo(person2); // A Alexandra Mendes mora em Leiria.

let person3 = {
    nome: "Alexandra Mendes",
    idade: 30,
    casada: false,
    morada: {
        rua: "Rua das Flores, 32",
        localidade: "Leiria",
        cp: "2400-230",
        pais: "Portugal"
    },
    contactos: {
        email: "amendes@gmail.com",
        telefones: [244323456, 961234567]
        /*
        telefones : {
            fixo: 244323456,
            movel: 961234567
        }
        */
    }
}
for (const [key, value] of Object.entries(person3)) {
    if (typeof value === "object") {
        console.log(key + "----");
        for (const [key2, value2] of Object.entries(value)) {
            console.log(`--> ${key2}=${value2}`);
        }
    } else {
        console.log(`${key}=${value}`);
    }
}

console.log(person3.morada.pais);
console.log(person3.contactos.telefones[1]);

let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
]
console.log(posts);

for (let post of posts) {
    console.log(post.title.toUpperCase());
}

// mostrar apenas posts que possuem a palavra 'sit' na propriedade "body".
for (let post of posts) {
    if (post.body.includes("sit")) {
        console.log(post);
    }
}

// Ordenar os posts alfabeticamente (ordem ascendente) pelo title

// function sortTitles(a, b) {
//     // if (a.title.charCodeAt(0) < b.title.charCodeAt(0)) {
//     if (a.title.toUpperCase() < b.title.toUpperCase()) {
//         return -1; // não mexe
//     }
//     if (a.title.toUpperCase() > b.title.toUpperCase()) {
//         return 1;
//     }
//     return 0;
// }

function sortTitles(a, b) {
    // retorna -1 se a < b
    // retorna 1 se a > b
    // retorna 0 se a === b
    return a.title.localeCompare(b.title, "pt-PT");
}

let postsArraySortedByTitle = [...posts].sort(sortTitles); // sortTitles é um callback
console.log(postsArraySortedByTitle);



