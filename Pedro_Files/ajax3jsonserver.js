const url = "http://localhost:3000/series";
const tableBody = document.querySelector(".tabelaDados > tbody");
const ftitle = document.querySelector("#title");
const fyear = document.querySelector("#year");

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
        content += `<tr data-id="${serie.id}">`;
        content += `<td>${serie.title}</td>`;
        content += `<td>${serie.year}</td>`;
        // content += `<td><button class="btDelete" data-id="${serie.id}">X</button></td>`;
        // content += `<td><button class="btDelete" data-id="${serie.id}">&#9249;</button></td>`;
        content += `<td><i class="fa-regular fa-trash-can btDelete" data-id="${serie.id}"></i></td>`;
        content += '</tr>';
    }
    tableBody.innerHTML = content;
    document.querySelector("#totalSeries").textContent = series.length;

    let botoes = document.querySelectorAll(".tabelaDados > tbody .btDelete");
    for (let botao of botoes) {
        botao.addEventListener("click", function (e) {
            // e, evt, event - referencia o objecto event
            // stopPropagation evita o event bubbling
            e.stopPropagation();
            let idToDelete = this.getAttribute("data-id");
            console.log(idToDelete);
            deleteSeries(idToDelete);
        })
    }

    let linhas = document.querySelectorAll(".tabelaDados > tbody > tr");
    for (let linha of linhas) {
        linha.addEventListener("click", function () {
            let id=this.getAttribute("data-id");
            // utilizar a querystring
            window.location.href=`ajax3detail.html?id=${id}`;
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
            if (localStorage.getItem("series")===null) {
                localStorage.setItem("series", JSON.stringify(series));
                // para extrair
                // JSON.parse(localStorage.getItem("series"))
            }
            mostraDados(series);
        })
        .catch(error => console.log(error));

}
lerDados();

document.querySelector("#btInsere").addEventListener("click", function () {
    if (ftitle.value!=="" && fyear.value!=="") {
        let novoRegisto = {
            title: ftitle.value,
            year: fyear.value
        }
        insertSeries(novoRegisto);
    } else {
        alert("Todos os campos são de preenchimento obrigatório!")
    }
});

function insertSeries(novoRegisto) {
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

}



