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

let params = new URLSearchParams(window.location.search);
let idToShow = params.get("id");
console.log(idToShow);

// extract the series information using an id as a parameter

async function getSeriesById(id) {
    try {
        let response = await fetch(`${url}/${id}`);
        if (response.ok) {
            let series = await response.json();
            console.log(series);
        } else {
            throw Error("URL does not exist!");
        }
    } catch (error) {
        alert("Error: ", error);
    }
}

getSeriesById(idToShow);
