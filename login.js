document.getElementById("loginForm").onsubmit = function(event){

    event.preventDefault();

    var rol = document.getElementById("rol").value;

    if(rol == ""){

        alert("Seleccione un tipo de usuario");
        return;

    }

    localStorage.setItem("rol", rol);

    document.getElementById("mensaje").style.display = "block";

    setTimeout(function(){

        window.location.href = "menu.html";

    }, 2000);

}