// DOM API - Document Object Model - Application Programming Interface
// DOM Scripting

// manipular parágrafo
// identificar parágrafo
// primeiro filho do body - body.firstElementChild()
// primeiro parágrafo da página - getElementsByTagName('p')[0] / querySelectorAll('p')[0]
// adicionar um id - getElementById('priPar') / querySelector('priPar')
// adicionar uma class - getElementsByClassName(nome_classe)[0] / querySelector(nome_classe) / querySelectorAll(nome_classe)[0]

// console.log(document.body.firstElementChild.textContent);
// console.log(document.getElementsByTagName('p')[0].textContent);
// console.log(document.querySelectorAll('p')[0].textContent);
// console.log(document.getElementById('priPar').textContent);
// console.log(document.querySelector('#priPar').textContent);
// console.log(document.getElementsByClassName('paragrafos')[0].textContent);
// console.log(document.querySelectorAll('.paragrafos')[0].textContent);
// o querySelector só vai buscar o primeiro elemento de uma nodelist (array de elementos HTML)
console.log(document.querySelector('.paragrafos').textContent);

// textContent - propriedade que retorna o conteúdo de um elemento HTML

// alterar o textode um elemento HTML
document.querySelector('.paragrafos').textContent = "Hello, world";
let elParagrafo = document.querySelector('.paragrafos');

// os seguinte comandos aplicam ao elemento um atributo "style" com as propriedades CSS definidas nos comandos.
// elParagrafo.style.color = "orange";
// elParagrafo.style.fontWeight = "bold";

// aplicar uma classe ao elemento
// elParagrafo.className = "destaqu";
// elParagrafo.className += " destaque";
elParagrafo.classList.add("destaque");

// eventos
// event handler - callback
document.querySelector("#btClica").onclick = function () {
    // console.log("Clicou");
    elParagrafo.style.color = "red";
    // alterar o valor de um atributo (neste caso, o disabled) do elemento HTML
    // document.querySelector("#btClica").disabled = true;
    // document.querySelector("#btClica").setAttribute("disabled", true);
    // "this" referencia o elemento no qual o evento foi disparado
    this.setAttribute("disabled", true);
}

function changeBackgroundColor() {
    this.style.backgroundColor = "blue";
}

// event listener - callback
// elParagrafo.addEventListener("click", function() { // comandos })
elParagrafo.addEventListener("click", changeBackgroundColor);
