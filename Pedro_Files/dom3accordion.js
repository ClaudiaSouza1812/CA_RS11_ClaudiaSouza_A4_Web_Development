let allH2Accordion = document.querySelectorAll("#acordeao h2");
let allAccordionContainers = document.querySelectorAll("#acordeao>section");

// código para o caso de não podermos ou querermos aplicar class css aos elementos <section>
for (let indice = 1; indice < allAccordionContainers.length; indice++) {
    allAccordionContainers[indice].classList.add("esconde");
}

for (let h2Element of allH2Accordion) {
    h2Element.addEventListener("click", function () {
        // esconder os outros containers/section
        for (let h2Element of allH2Accordion) {
            if (h2Element !== this) {
                h2Element.nextElementSibling.classList.add("esconde");
            }
        }

        this.nextElementSibling.classList.toggle("esconde");
    });
}