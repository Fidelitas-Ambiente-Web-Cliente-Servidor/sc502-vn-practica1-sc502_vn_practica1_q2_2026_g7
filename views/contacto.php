<!DOCTYPE html>
<html lang="es">

<head>
    <title>Caminos Armónicos - Contacto</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/contacto.css">
    <meta charset="UTF-8">
</head>

<body>

    <nav>
        <div class="logo">
            <h2>Caminos Armónicos</h2>
        </div>

        <ul>
            <li><a href="index.php?controller=index&action=index">Inicio</a></li>
            <li><a href="index.php?controller=cursos&action=index">Cursos</a></li>
            <li><a href="index.php?controller=profesores&action=index">Profesores</a></li>
            <li><a class="activo" href="index.php?controller=contacto&action=index">Contacto</a></li>
        </ul>

    </nav>

    <section class="hero">
        <h1>Contacto</h1>

        <p>
            ¿Tienes alguna duda o quieres inscribirte en alguno de nuestros cursos?
            Comunícate con nosotros por cualquiera de nuestros medios.
        </p>
    </section>

    <div class="formu">

        <h3>Envíanos un mensaje</h3>

        <form id="miFormulario"
              action="index.php?controller=contacto&action=store"
              method="POST">

            <label>Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre">
            <span id="errorNombre" class="mensaje-error"></span>

            <label>Correo Electrónico:</label>
            <input type="email" id="correo" name="correo">
            <span id="errorCorreo" class="mensaje-error"></span>

            <label>Teléfono:</label>
            <input type="tel" id="telefono" name="telefono">
            <span id="errorTelefono" class="mensaje-error"></span>

            <label>Asunto:</label>
            <input type="text" id="asunto" name="asunto">
            <span id="errorAsunto" class="mensaje-error"></span>

            <label>Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="6"></textarea>
            <span id="errorMensaje" class="mensaje-error"></span>

            <div id="mensajeExito" class="mensaje-exito"></div>

            <button type="submit" id="btnEnviar" class="boton-curso">
                Enviar Mensaje
            </button>

        </form>

    </div>

    <div class="info">

        <h3>Información General</h3>

        <p><strong>Dirección:</strong> Cartago, Turrialba, Costa Rica.</p>

        <p><strong>Teléfono:</strong> +506 8888-8888</p>

        <p><strong>Correo:</strong> info@caminosarmonicos.com</p>

        <h3>Nuestra Ubicación</h3>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31443.399667283713!2d-83.6880248!3d9.8985197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1781794605846!5m2!1ses-419!2scr"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
        </iframe>

    </div>
    <footer>

        <h3>Caminos Armónicos</h3>

        <p>Facebook | Instagram | YouTube</p>

        <p>© 2026 Caminos Armónicos</p>

    </footer>
</body>

</html>