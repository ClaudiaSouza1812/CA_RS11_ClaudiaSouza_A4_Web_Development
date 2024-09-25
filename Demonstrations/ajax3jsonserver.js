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
        content += "<tr>";
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
}

function readData() {
    // GET
    // fetch(url, {method: "GET"})
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

document.querySelector("#btInsert").addEventListener("click", function () {
    console.log("Clicou");
    let ftitle = document.querySelector("#title").value;
    let fyear = document.querySelector("#year").value;
    let newRegister = {
        title: ftitle.value,
        year: fyear.value
    }
    // POST
    // Methods Chaining, one method receive the return of the other, in this algorithm, .them receive the result of the previous method as a parameter  
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
});