function validarMatricula(matricula) {
    return matricula === "miMatricula123";
}

function cambiarContrasena() {
    const nuevaContrasenaInput = document.getElementById("nueva-contrasena");
    const confirmarContrasenaInput = document.getElementById("confirmar-contrasena");
    const codigoVerificacionInput = document.getElementById("codigo-verificacion");
    const matriculaInput = document.getElementById("matricula");

    const nuevaContrasena = nuevaContrasenaInput.value;
    const confirmarContrasena = confirmarContrasenaInput.value;
    const codigoVerificacion = codigoVerificacionInput.value;
    const matricula = matriculaInput.value;

    if (nuevaContrasena === "" || confirmarContrasena === "" || codigoVerificacion === "" || matricula === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!validarContrasena(nuevaContrasena)) {
        alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
        return;
    }

    if (!validarMatricula(matricula)) {
        alert("Matrícula incorrecta. Inténtalo de nuevo.");
        return;
    }

    if (codigoVerificacion !== "1010") {
        alert("Código de verificación incorrecto. Inténtalo de nuevo.");
        return;
    }

    if (nuevaContrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return;
    }

    alert("Contraseña cambiada con éxito. Inicia sesión con tu nueva contraseña.");
    window.location.href = "login.html";
}

function validarContrasena(contrasena) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(contrasena);
}
