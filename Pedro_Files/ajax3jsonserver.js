const url = "http://localhost:3000/series";
const tableBody = document.querySelector(".tabelaDados > tbody");

function deleteSeries(id) {
    // http://localhost:3000/series/6
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
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
            lerDados();
        })
        .catch(error => console.log(error));
}

function mostraDados(series) {
    let content = "";
    for (let serie of series) {
        content += '<tr>';
        content += `<td>${serie.title}</td>`;
        content += `<td>${serie.year}</td>`;
        content += `<td><button class="btDelete" data-id="${serie.id}">X</button></td>`;
        content += '</tr>';
    }
    tableBody.innerHTML = content;
    document.querySelector("#totalSeries").textContent = series.length;

    let botoes = document.querySelectorAll(".tabelaDados > tbody .btDelete");
    for (let botao of botoes) {
        botao.addEventListener("click", function () {
            let idToDelete = this.getAttribute("data-id");
            console.log(idToDelete);
            deleteSeries(idToDelete);
        })
    }
}

function lerDados() {
    // GET
    // fetch(url, { method: "GET"})
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
            mostraDados(series);
        })
        .catch(error => console.log(error));

}
lerDados();

document.querySelector("#btInsere").addEventListener("click", function () {
    let ftitle = document.querySelector("#title");
    let fyear = document.querySelector("#year");
    let novoRegisto = {
        title: ftitle.value,
        year: fyear.value
    }
    // POST
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoRegisto)
    })
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
            lerDados();
        })
        .catch(error => console.log(error));

});

// let linhas = document.querySelectorAll(".tabelaDados > tbody > tr");
// for (let linha of linhas) {
//     linha.addEventListener("click", function () {
//         console.log("clicou");
//     })
// }

