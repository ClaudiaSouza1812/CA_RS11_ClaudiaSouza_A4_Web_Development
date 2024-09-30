const url = "http://localhost:3000/series";

// console.log(window.location.href); // http://127.0.0.1:5500/ajax3detail.html?id=2
// permite ler apenas a querystring
// console.log(window.location.search); // ?id=2
// let querystring=window.location.search.slice(1);
// let parametersValues=querystring.split("=");
// console.log(parametersValues);
// parametersValues[0] - id
// parametersValues[1] - 2

let params=new URLSearchParams(window.location.search);
// o método Number devolve o valor NaN se o valor do parâmetro id não for um número
let idToShow=Number(params.get("id"));
// console.log(idToShow);

if (isNaN(idToShow)) {
    window.location.href="ajax3jsonserver.html";
} else {
    getSeriesById(idToShow);
}
// extrair a informação reltiva à série com o id passado como parâmetro
async function getSeriesById(id) {
    try {
        let response = await fetch(`${url}/${id}`);
        if (response.ok) {
            let series = await response.json();
            // console.log(series);
            document.querySelector("#title").textContent=series.title;
            document.querySelector("#year").textContent=series.year;
        } else {
            // 404
            throw Error("URL does not exist!");
            // window.location.href="ajax3jsonserver.html"
        }
    } catch(error) {
        alert("Ocorreu um erro: "+error);
    }
}

