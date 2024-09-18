document.querySelector("#bt01").onclick = function () {
    if (this.textContent == "Mostrar") {
        this.textContent = "Esconder";
        document.querySelector("#bt01content").style.display = "none";
    } else {
        this.textContent = "Mostrar";
        document.querySelector("#bt01content").style.display = "block";
    }
}
