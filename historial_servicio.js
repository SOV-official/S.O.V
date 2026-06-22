// se guardan los servicios guardados
let servicios = JSON.parse(localStorage.getItem("servicios")) || [];

// cosas de html
let tabla = document.getElementById("tablaServicio");
let vacio = document.getElementById("vacio");

// Guarda en LocalStorage
function guardar() {
    localStorage.setItem("servicios", JSON.stringify(servicios));
}

// Muestra los servicios
function mostrarServicios() {

    tabla.innerHTML = "";

    if (servicios.length === 0) {
        vacio.innerHTML = "No hay servicios registrados";
        return;
    }

    vacio.innerHTML = "";

    servicios.forEach((s, index) => {

        tabla.innerHTML += `
            <tr>
                <td>${s.profesor}</td>
                <td>${s.materia}</td>
                <td>${s.tipo}</td>
                <td>${s.descripcion}</td>
                <td>${s.fecha}</td>
                <td>
                    <button onclick="editar(${index})">
                        Editar
                    </button>

                    <button onclick="eliminar(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

    });

}

// con este boton elimina el servicio
function eliminar(index) {

    if (confirm("¿Seguro que quieres eliminar este servicio?")) {

        servicios.splice(index, 1);

        guardar();
        mostrarServicios();

    }

}

// funciona para editar el servicio
function editar(index) {

    let s = servicios[index];

    let profesor = prompt("Profesor:", s.profesor);
    if (profesor === null) return;

    let materia = prompt("Materia:", s.materia);
    if (materia === null) return;

    let tipo = prompt("Tipo de servicio:", s.tipo);
    if (tipo === null) return;

    let descripcion = prompt("Descripción:", s.descripcion);
    if (descripcion === null) return;

    let fecha = prompt("Fecha:", s.fecha);
    if (fecha === null) return;

    servicios[index] = {
        profesor,
        materia,
        tipo,
        descripcion,
        fecha
    };

    guardar();
    mostrarServicios();

}

// inicia
mostrarServicios();