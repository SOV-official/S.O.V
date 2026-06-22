let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

mostrarUsuarios();

function guardarUsuario(){

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if(nombre === "" || correo === "" || password === ""){
        alert("Complete todos los campos");
        return;
    }

    usuarios.push({
        nombre,
        correo,
        password
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";

    mostrarUsuarios();
}

function mostrarUsuarios(){

    const tabla = document.getElementById("tablaUsuarios");

    tabla.innerHTML = "";

    usuarios.forEach((usuario,index)=>{

        tabla.innerHTML += `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.correo}</td>
                <td>
                    <button class="eliminar" onclick="eliminarUsuario(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

function eliminarUsuario(index){

    usuarios.splice(index,1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarUsuarios();
}