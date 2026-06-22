 var rol = localStorage.getItem("rol");

        if(rol == "profesor"){

            var usuarios = document.getElementById("usuarios");
            var reportes = document.getElementById("reportes");
            var historialPrestamo = document.getElementById("historial_prestamo");
            var historialTickets = document.getElementById("historial_tickets");
             var historial = document.getElementById("historial");

            if(usuarios) usuarios.style.display = "none";
            if(reportes) reportes.style.display = "none";
            if(historialPrestamo) historialPrestamo.style.display = "none";
            if(historialTickets) historialTickets.style.display = "none";
             if(historial) historial.style.display = "none";
        }
