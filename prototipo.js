function guardarDatos(event) {

    event.preventDefault();

    const registro = {
        laboratorio: document.getElementById("laboratorio").value,
        asignatura: document.getElementById("asignatura").value,
        docente: document.getElementById("docente").value,
        fecha: document.getElementById("fecha").value,
        horaSalida: document.getElementById("horaSalida").value,
        grupo: document.getElementById("grupo").value,
        turno: document.getElementById("turno").value,
        estadoEquipo: document.getElementById("estadoEquipo").value,
        estudiante: document.getElementById("estudiante").value,
        numeroEquipo: document.getElementById("numeroEquipo").value
    };

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    historial.push(registro);

    localStorage.setItem("historial", JSON.stringify(historial));

    alert("Registro guardado correctamente");

    window.location.href = "historial.html";
}