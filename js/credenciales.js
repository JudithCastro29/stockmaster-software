document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // OJO EJEMPLO
    var usuarioValido = "admin";
    var contraseñaValida = "admin123";

    if (usuario === usuarioValido && contraseña === contraseñaValida) {
        window.location.href = "dashboard.html"; 
    } else {
        document.getElementById("error-message").textContent = "Credenciales incorrectas, intenta nuevamente.";
    }
});
