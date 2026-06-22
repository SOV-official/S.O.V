document.getElementById("formPrestamo").addEventListener("submit", function(e){

    e.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let equipo = document.getElementById("equipo").value.trim();
    let fecha = document.getElementById("fecha").value;

    if(usuario === "" || equipo === "" || fecha === ""){
        alert("Complete todos los campos");
        return;
    }

    let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

    prestamos.push({
        usuario: usuario,
        equipo: equipo,
        fecha: fecha
    });

    localStorage.setItem("prestamos", JSON.stringify(prestamos));

    let mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";

    this.reset();

    setTimeout(() => {
        mensaje.style.display = "none";
        window.location.href = "menu.html";
    }, 1500);

});