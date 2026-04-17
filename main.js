const btn = document.getElementById("btnCatalogo");
const seccion = document.getElementById("productos");

btn.addEventListener("click", function(e) {
    e.preventDefault(); 

    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});