var tickets = JSON.parse(localStorage.getItem("tickets")) || [];

mostrarTickets();

function mostrarTickets(){

    var tabla = document.getElementById("tablaTickets");

    tabla.innerHTML = "";

    if(tickets.length === 0){

        tabla.innerHTML =
        "<tr><td colspan='6' class='sin-registros'>No hay tickets registrados.</td></tr>";

        return;
    }

    for(var i = 0; i < tickets.length; i++){

        tabla.innerHTML +=
        "<tr>" +
        "<td>" + tickets[i].nombre + "</td>" +
        "<td>" + tickets[i].grupo + "</td>" +
        "<td>" + tickets[i].equipo + "</td>" +
        "<td>" + tickets[i].lugar + "</td>" +
        "<td>" + tickets[i].motivo + "</td>" +
        "<td>" +

        "<button onclick='editarTicket(" + i + ")'>✏️ Editar</button> " +

        "<button onclick='eliminarTicket(" + i + ")'>🗑️ Eliminar</button>" +

        "</td>" +
        "</tr>";

    }

}

function eliminarTicket(indice){

    if(confirm("¿Desea eliminar este ticket?")){

        tickets.splice(indice,1);

        localStorage.setItem(
            "tickets",
            JSON.stringify(tickets)
        );

        mostrarTickets();

    }

}

function editarTicket(indice){

    var nuevoNombre = prompt(
        "Nombre del solicitante:",
        tickets[indice].nombre
    );

    if(nuevoNombre == null){
        return;
    }

    var nuevoGrupo = prompt(
        "Grupo:",
        tickets[indice].grupo
    );

    if(nuevoGrupo == null){
        return;
    }

    var nuevoEquipo = prompt(
        "Número de equipo:",
        tickets[indice].equipo
    );

    if(nuevoEquipo == null){
        return;
    }

    var nuevoLugar = prompt(
        "Lugar de uso:",
        tickets[indice].lugar
    );

    if(nuevoLugar == null){
        return;
    }

    var nuevoMotivo = prompt(
        "Motivo:",
        tickets[indice].motivo
    );

    if(nuevoMotivo == null){
        return;
    }

    tickets[indice].nombre = nuevoNombre;
    tickets[indice].grupo = nuevoGrupo;
    tickets[indice].equipo = nuevoEquipo;
    tickets[indice].lugar = nuevoLugar;
    tickets[indice].motivo = nuevoMotivo;

    localStorage.setItem(
        "tickets",
        JSON.stringify(tickets)
    );

    mostrarTickets();

}
