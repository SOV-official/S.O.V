document.addEventListener("DOMContentLoaded", () => {

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    let tabla = document.getElementById("contenidoTabla");

    if (historial.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="10">
                    No hay registros guardados.
                </td>
            </tr>
        `;
        return;
    }

    historial.forEach(registro => {
        tabla.innerHTML += `
            <tr>
                <td>${registro.laboratorio}</td>
                <td>${registro.asignatura}</td>
                <td>${registro.docente}</td>
                <td>${registro.fecha}</td>
                <td>${registro.horaSalida}</td>
                <td>${registro.grupo}</td>
                <td>${registro.turno}</td>
                <td>${registro.estadoEquipo}</td>
                <td>${registro.estudiante}</td>
                <td>${registro.numeroEquipo}</td>
            </tr>
        `;
    });

});