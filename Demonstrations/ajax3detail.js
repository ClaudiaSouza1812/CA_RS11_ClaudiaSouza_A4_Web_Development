const url = "http://localhost:3000/series";

console.log(window.location.href); // http://127.0.0.1:5500/Demonstrations/ajax3detail.html?id=4
// let us read the querystring
console.log(window.location.search); // ?id=4

/*
let queryString = window.location.search.slice(1);
let parametersValues = queryString.split("=");
console.log(parametersValues);
*/
// parametersValues[0] - id
// parametersValues[1] - 4

let parameters = new URLSearchParams(window.location.search);
// Number return NaN if not a number
let idToShow = Number(parameters.get("id"));
console.log(idToShow);

if (isNaN(idToShow)) {
    window.location.href = "ajax3jsonserver.html"
} else {
    getSeriesById(idToShow);
}

// extract the series information using an id as a parameter

async function getSeriesById(id) {
    try {
        let response = await fetch(`${url}/${id}`);
        if (response.ok) {
            let series = await response.json();
            //console.log(series);
            document.querySelector("#title").textContent = series.title;
            document.querySelector("#year").textContent = series.year;
        } else {
            // 404
            throw Error("URL does not exist!");
            // window.location.href = "ajax3jsonserver.html";
        }
    } catch (error) {
        alert("Error: ", error);
    }
}


