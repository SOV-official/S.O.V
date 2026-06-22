let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

function guardarDatos(){
    localStorage.setItem("prestamos", JSON.stringify(prestamos));
}

function mostrarPrestamos(){

    let tabla = document.getElementById("tabla");
    let vacio = document.getElementById("vacio");

    tabla.innerHTML = "";

    if(prestamos.length === 0){
        vacio.innerHTML = "No hay préstamos registrados";
        return;
    }

    vacio.innerHTML = "";

    prestamos.forEach((p, index) => {

        tabla.innerHTML += `
            <tr>

                <td>
                    <input type="text" id="u${index}" value="${p.usuario}">
                </td>

                <td>
                    <input type="text" id="e${index}" value="${p.equipo}">
                </td>

                <td>
                    <input type="date" id="f${index}" value="${p.fecha}">
                </td>

                <td>
                    <button onclick="modificar(${index})">
                        Modificar
                    </button>

                    <button onclick="eliminar(${index})">
                        Eliminar
                    </button>
                </td>

            </tr>
        `;

    });

}

function modificar(index){

    let usuario = document.getElementById("u" + index).value;
    let equipo = document.getElementById("e" + index).value;
    let fecha = document.getElementById("f" + index).value;

    prestamos[index] = {
        usuario: usuario,
        equipo: equipo,
        fecha: fecha
    };

    guardarDatos();

    alert("✔ Préstamo modificado correctamente");

}

function eliminar(index){

    if(confirm("¿Desea eliminar este préstamo?")){

        prestamos.splice(index, 1);

        guardarDatos();

        mostrarPrestamos();

    }

}

mostrarPrestamos();