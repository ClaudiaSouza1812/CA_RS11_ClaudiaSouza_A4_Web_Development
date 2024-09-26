const url = "http://localhost:3000/series";
const tableBody = document.querySelector(".tabelaDados > tbody");

function deleteSerie(id) {
    // http://localhost:3000/series/6
    fetch(`${url}/${id}`, {method: "DELETE"})
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist!");
                } else {
                    return Promise.reject("Unknown error!");
                }
            }
        })
        .then(resultado => {
            readData();
        })
        .catch(error => console.log(error));
}

function showData(series) {
    let content = "";
    for (let serie of series) {
        content += `<tr data-id=${serie.id}>`;
        content += `<td>${serie.title}</td>`;
        content += `<td>${serie.year}</td>`;
        content += `<td><button class="btDelete" data-id=${serie.id}>X</td>`;
        content += "</tr>";
    }
    tableBody.innerHTML = content;
    document.querySelector("#totalSeries").textContent = series.length;

    let button = document.querySelectorAll(".tabelaDados > tbody .btDelete");
    for (let bt of button) {
        bt.addEventListener("click", function () {
            let idToDelete = this.getAttribute("data-id");
            console.log(idToDelete);
            deleteSerie(idToDelete);
        })
    }
    let linhas = document.querySelectorAll(".tabelaDados > tbody > tr");
    for (let linha of linhas) {
        linha.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            window.location.href = `ajax3detail.html?id=${id}`;
        })
    }
}

// GET
// fetch(url, {method: "GET"})
function readData() {
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 404) {
                return Promise.reject("URL does not exist!");
            } else {
                return Promise.reject("Unknown error!");
            }
        }
    })
    .then(series => {
        showData(series);
    })
    .catch(error => console.log(error));
}
readData();

const ftitle = document.querySelector("#title");
const fyear = document.querySelector("#year");

document.querySelector("#btInsert").addEventListener("click", function () {
    console.log("Clicou");
    
    if (ftitle.value !== "" && fyear.value !== "") {
        let newRegister = {
            title: ftitle.value,
            year: fyear.value
        }
        insertSerie(newRegister);
    } else {
        alert("Fields with mandatory data!")
    }
});

// POST
// Methods Chaining, one method receive the return of the other, in this algorithm, .them receive the result of the previous method as a parameter  
function insertSerie(newRegister) {
    fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(newRegister)})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 404) {
                return Promise.reject("URL does not exist!");
            } else {
                return Promise.reject("Unknown error!");
            }
        }
    })
    .then(series => {
        console.log(series);
        ftitle.value = "";
        fyear.value = "";
        readData();
    })
    .catch(error => console.log(error));
}
    
