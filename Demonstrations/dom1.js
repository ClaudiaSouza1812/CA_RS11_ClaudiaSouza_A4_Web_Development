// DOM API - Document Object Model
// Dom Scripting

// manipulate paragraph
// identify paragraph
// first child of body - body.firstChild()
// first page paragraph - getElementsByTagName("p")[0] / querySelector("p")[0]
// get an element by id - getElementById("p01") / querySelector("p01")
// get a class - getElementsByClassName(class_name)[0] / querySelector(class_name) / querySelectorAll(class_name)[0]

/*
console.log(document.body.firstElementChild.textContent);
console.log(document.getElementsByTagName("p")[0].textContent);
console.log(document.querySelectorAll("p")[0].textContent);
console.log(document.getElementById("p01").textContent);
console.log(document.querySelector("#p01").textContent);
console.log(document.getElementsByClassName("paragraphs")[0].textContent);
console.log(document.querySelectorAll(".paragraphs")[0].textContent);
// the querySelector only get the first element of a nodelist (HTML array elements)
console.log(document.querySelector(".paragraphs").textContent);
*/
// textContent - property that returns the content of a HTML element

// change the text of an element
document.querySelector(".paragraphs").textContent = "Hello world";
let theParagraph = document.querySelector(".paragraphs");

// theParagraph.style.color = "orange";
// theParagraph.style.fontWeight = "bold";

// add a class to an element
// theParagraph.className = "emphasis";
// theParagraph.className += " emphasis";
theParagraph.classList.add("emphasis");
