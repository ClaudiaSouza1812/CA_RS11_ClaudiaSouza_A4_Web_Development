let person01 = ["Alexandra Mendes", 30, "Leiria", false];

// literal object
let person02 = {
    // key/value pairs
    name: "Alexandra Mendes",
    age: 30,
    city: "Leiria",
    isMarried: false
    // numero_de_filhos
    // numeroFilhos
    // "numero de filhos"
};
console.log(person02.name);

let property = "nome";
console.log(person02.property); // undefined
// will return the object name, because the variable value its equal to the one of the objects property, in this case, the property 'name';
console.log(person02[property]); 
console.log(person02["nome"]);

function showInfo(person) {
    console.log(`${person.name} lives in ${person.city}.`);
}
showInfo(person02);

let person03 = {
    name: "Alexandra Mendes",
    age: 30,
    isMarried: false,
    address: {
        street: "Rua da Paz, 10",
        city: "Leiria",
        postalCode: "2400-230",
        country: "Portugal"
    },
    contacts: {
        email: "alexandra.mendes@gmail.com",
        phones: {
            home: "912345678",
            work: "912345679",
            cell: "912345670"
            }
        }
};

console.log(person03.address.country);
console.log(person03.contacts.phones.work);

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
      "title": "qui est esse",
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

// show only the title of each object

console.log(posts);

posts.forEach(obj => {
    console.log(obj.title);
});

// show only the posts that have "sit" in "body"

posts.forEach(obj => {
    if (obj.body.includes("sit")) {
        console.log(obj);
    }
});

// order alphabeticaly posts by the title

function sortTitles01(a, b) {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
    }
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
    }
    return 0;
}

// sortTitles01 its a callback, sort() pass the parameters of sortTitles intrinsically
let sortedPosts01 = [...posts].sort(sortTitles01); 
console.log(sortedPosts01);

function sortTitles02(a, b) {
    // return -1 if a < b
    // return 1 if a > b
    // return 0 if a === b
    return a.title.localeCompare(b.title, "pt-PT");
}

// sortTitles02 its a callback, sort() pass the parameters of sortTitles intrinsically
let sortedPosts02 = [...posts].sort(sortTitles02); //




