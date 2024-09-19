let allAccordionH2 = document.querySelectorAll("#accordion h2");
let allAccordionContainer = document.querySelectorAll("#accordion>section");

// code for not apply css class to the elements
for (let i = 1; i < allAccordionContainer.length; i++) {
    allAccordionContainer[i].classList.add("hide");
}

for (let h2Element of allAccordionH2) {
    h2Element.addEventListener("click", function () {
        // console.log("Clicou");
        // hide the other containers/section
        for (let h2Element of allAccordionH2) {
            if (h2Element !== this) {
                h2Element.nextElementSibling.classList.add("hide");
            }
        };
        this.nextElementSibling.classList.toggle("hide");
    })
}