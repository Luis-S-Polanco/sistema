function login(userType) {
    const matriculaInput = document.getElementById(`${userType}-matricula`);
    const contrasenaInput = document.getElementById(`${userType}-contrasena`);

    const matricula = matriculaInput.value;
    const contrasena = contrasenaInput.value;

    if (matricula === "" || contrasena === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Supongamos que aquí verificamos la contraseña con una contraseña temporal "Temp123456789".
    const contrasenaTemporal = "Temp123456789";

    if (contrasena === contrasenaTemporal) {
        alert("Debe cambiar su contraseña.");
        // Redirige al usuario a una página para cambiar la contraseña.
        window.location.href = "Contraseña-nueva.html";
    } else {
        // Redirige al usuario a la página principal (cambia la URL a la página deseada).
        alert("Todo Correcto.");
        window.location.href = "formulario.html";
    }
}

function olvidarContrasena(userType) {
    // Aquí puedes implementar la lógica para restablecer la contraseña.
    // Esto podría implicar enviar un correo electrónico o proporcionar un formulario para restablecer la contraseña.
    alert(`Por favor, contacta al soporte para restablecer la contraseña del usuario ${userType}.`);
}

