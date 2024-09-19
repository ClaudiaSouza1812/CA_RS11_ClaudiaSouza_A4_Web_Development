const btShow = document.querySelector("#btMostra");
// const collapsibleContent = document.querySelectorAll("section")[0];
const collapsibleContent = btShow.parentElement.nextElementSibling;
// collapsibleContent.style.display = "none";

btShow.addEventListener("click", function () {

    // if (collapsibleContent.style.display === "block") {
    //     collapsibleContent.style.display = "none";
    // } else {
    //     collapsibleContent.style.display = "block";
    // }

    // alternativa

    // lê todas as propriedades CSS de um elemento HTML
    // let elStyles = window.getComputedStyle(collapsibleContent);
    // console.log(elStyles);
    // let displayValue = window.getComputedStyle(collapsibleContent).getPropertyValue("display");
    // console.log(displayValue);
    // se o container section estiver escondido
    // if (displayValue === "none") {
    //     collapsibleContent.style.display = "block";
    // } else {
    //     collapsibleContent.style.display = "none";
    // }

    // alternativa 2

    // se o elemento collapsibleContent tiver a class "esconde" aplicada, remova essa classe
    // if (collapsibleContent.classList.contains("esconde")) {
    //     collapsibleContent.classList.remove("esconde");
    //     // collapsibleContent.removeAttribute("class");
    //     btShow.textContent = "Mostrar";
    // } else {
    //     collapsibleContent.classList.add("esconde");
    //     // collapsibleContent.setAttribute("class", "esconde");
    //     btShow.textContent = "Esconder";
    // }

    // alternativa 3

    collapsibleContent.classList.toggle("esconde");
    // if (collapsibleContent.classList.contains("esconde")) {
    //     this.textContent = "Mostrar";
    // } else {
    //     this.textContent = "Esconder";
    // }

    this.textContent = (collapsibleContent.classList.contains("esconde")) ? "Mostrar" : "Esconder";
});
