   document.getElementById("formServicio").onsubmit = function(e){

            e.preventDefault();

            var profesor = document.getElementById("profesor").value;
            var materia = document.getElementById("materia").value;
            var fecha = document.getElementById("fecha").value;
            var tipo = document.getElementById("tipo").value;
            var descripcion = document.getElementById("descripcion").value;

            if(profesor == "" || materia == "" || fecha == "" || tipo == "" || descripcion == ""){
                alert("Complete todos los campos");
                return;
            }

            var servicios = JSON.parse(localStorage.getItem("servicios")) || [];

            servicios.push({
                profesor: profesor,
                materia: materia,
                fecha: fecha,
                tipo: tipo,
                descripcion: descripcion
            });

            localStorage.setItem("servicios", JSON.stringify(servicios));

            document.getElementById("mensaje").style.display = "block";

            setTimeout(function(){
                window.location.href = "menu.html";
            }, 1500);

        }