let servicios = JSON.parse(localStorage.getItem("servicios")) || [];

let tabla = document.getElementById("tablaServicio");
let vacio = document.getElementById("vacio");

function mostrarServicios(){

    tabla.innerHTML = "";

    if(servicios.length === 0){
        vacio.innerHTML = "No hay servicios registrados";
        return;
    }

    vacio.innerHTML = "";

    servicios.forEach((s) => {

        tabla.innerHTML += `
            <tr>
                <td>${s.pc}</td>
                <td>${s.usuario}</td>
                <td>${s.problema}</td>
                <td>${s.estado}</td>
                <td>${s.fecha}</td>
            </tr>
        `;

    });

}

mostrarServicios();