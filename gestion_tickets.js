function crearTicket(){

    const ticket = {

        nombre: document.getElementById("nombre").value,
        grupo: document.getElementById("grupo").value,
        equipo: document.getElementById("equipo").value,
        lugar: document.getElementById("lugar").value,
        motivo: document.getElementById("motivo").value,
        estado: "Pendiente"

    };

    if(
        ticket.nombre === "" ||
        ticket.grupo === "" ||
        ticket.equipo === "" ||
        ticket.lugar === "" ||
        ticket.motivo === ""
    ){

        alert("Complete todos los campos");
        return;

    }

    let tickets =
    JSON.parse(localStorage.getItem("tickets")) || [];

    tickets.push(ticket);

    localStorage.setItem(
        "tickets",
        JSON.stringify(tickets)
    );

    alert("Ticket enviado correctamente");

    document.getElementById("nombre").value = "";
    document.getElementById("grupo").value = "";
    document.getElementById("equipo").value = "";
    document.getElementById("lugar").value = "";
    document.getElementById("motivo").value = "";

}