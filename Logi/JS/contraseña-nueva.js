function changePassword() {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return;
    }

    if (newPassword.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
        alert("La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.");
        return;
    }

    alert("Contraseña cambiada con éxito. Redirigiendo a la página principal...");
    window.location.href = "formulario.html";
}
