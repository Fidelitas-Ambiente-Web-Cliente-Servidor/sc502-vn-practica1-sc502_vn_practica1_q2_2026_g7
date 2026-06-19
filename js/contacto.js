document.addEventListener("DOMContentLoaded", function () {

    let miFormulario = document.getElementById("miFormulario");
    let btnEnviar = document.getElementById("btnEnviar");

    let inputNombre = document.getElementById("nombre");
    let inputCorreo = document.getElementById("correo");
    let inputTelefono = document.getElementById("telefono");
    let inputAsunto = document.getElementById("asunto");
    let inputMensaje = document.getElementById("mensaje");
    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorTelefono = document.getElementById("errorTelefono");
    let errorAsunto = document.getElementById("errorAsunto");
    let errorMensaje = document.getElementById("errorMensaje");
    let mensajeExito = document.getElementById("mensajeExito");
    let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexNumeros = /^[0-9]+$/;
    
    function validarFormulario() {

        let nombreValido = false;
        let correoValido = false;
        let telefonoValido = false;
        let asuntoValido = false;
        let mensajeValido = false;
        if (inputNombre.value.length >= 5 && regexLetras.test(inputNombre.value)) {
            errorNombre.innerText = "";
            inputNombre.style.borderColor = "black";
            nombreValido = true;
        } else {
            errorNombre.innerText = "Error: Mínimo 5 caracteres y solo letras.";
            inputNombre.style.borderColor = "red";
        }
        if (regexCorreo.test(inputCorreo.value)) {
            errorCorreo.innerText = "";
            inputCorreo.style.borderColor = "black";
            correoValido = true;
        } else {
            errorCorreo.innerText = "Error: Formato de correo electrónico inválido.";
            inputCorreo.style.borderColor = "red";
        }
        if (inputTelefono.value.length >= 8 && regexNumeros.test(inputTelefono.value)) {
            errorTelefono.innerText = "";
            inputTelefono.style.borderColor = "black";
            telefonoValido = true;
        } else {
            errorTelefono.innerText = "Error: Solo números, mínimo 8 dígitos.";
            inputTelefono.style.borderColor = "red";
        }
        if (inputAsunto.value.length >= 3) {
            errorAsunto.innerText = "";
            inputAsunto.style.borderColor = "black";
            asuntoValido = true;
        } else {
            errorAsunto.innerText = "Error: Mínimo 3 caracteres.";
            inputAsunto.style.borderColor = "red";
        }
        if (inputMensaje.value.length >= 20) {
            errorMensaje.innerText = "";
            inputMensaje.style.borderColor = "black";
            mensajeValido = true;
        } else {
            errorMensaje.innerText = "Error: Mínimo 20 caracteres.";
            inputMensaje.style.borderColor = "red";
        }
        if (nombreValido && correoValido && telefonoValido && asuntoValido && mensajeValido) {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }
    inputNombre.addEventListener("input", validarFormulario);
    inputCorreo.addEventListener("input", validarFormulario);
    inputTelefono.addEventListener("input", validarFormulario);
    inputAsunto.addEventListener("input", validarFormulario);
    inputMensaje.addEventListener("input", validarFormulario);
    miFormulario.addEventListener("submit", function (event) {
        event.preventDefault();
        mensajeExito.innerText = "¡Formulario enviado con éxito!";
        mensajeExito.style.display = "block";
        miFormulario.reset();
        btnEnviar.disabled = true;
        setTimeout(function () {
            mensajeExito.innerText = "";
            mensajeExito.style.display = "none";
        }, 2000);
    });

});