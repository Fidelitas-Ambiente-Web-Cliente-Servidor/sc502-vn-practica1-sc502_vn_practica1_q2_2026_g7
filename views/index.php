<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Caminos Armónicos</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/index.css">
</head>

<body>

<nav>

    <div class="logo">
        <h2>Caminos Armónicos</h2>
    </div>

    <ul>
        <li><a class="activo" href="index.php?controller=index&action=index">Inicio</a></li>
        <li><a href="index.php?controller=cursos&action=index">Cursos</a></li>
        <li><a href="index.php?controller=profesores&action=index">Profesores</a></li>
        <li><a href="index.php?controller=contacto&action=index">Contacto</a></li>
    </ul>

</nav>

<section class="hero">

    <h1>Caminos Armónicos</h1>

    <p>
        Descubre tu talento musical y desarrolla tus habilidades
        con nuestros programas de formación profesional.
    </p>

    <a href="index.php?controller=cursos&action=index" class="boton-curso">
        Explorar Cursos
    </a>

</section>

<section class="destacados">

    <h2>Cursos Destacados</h2>

    <div class="contenedor-cursos">

        <?php foreach ($cursos as $curso): ?>

            <div class="curso">

                <img src="img/<?= $curso['imagen']; ?>" alt="<?= $curso['titulo']; ?>">

                <h3><?= $curso['titulo']; ?></h3>

                <p><?= $curso['descripcion']; ?></p>

                <p><strong>Categoría:</strong> <?= $curso['categoria']; ?></p>

                <p><strong>Duración:</strong> <?= $curso['duracion']; ?></p>

                <a href="index.php?controller=cursos&action=index" class="boton-curso">
                    Ver más
                </a>

            </div>

        <?php endforeach; ?>

    </div>

</section>

<section class="estadisticas">

    <h2>Nuestra Academia</h2>

    <div class="contenedor-estadisticas">

        <div>
            <h3>1200+</h3>
            <p>Estudiantes</p>
        </div>

        <div>
            <h3>30+</h3>
            <p>Profesores</p>
        </div>

        <div>
            <h3>25+</h3>
            <p>Cursos</p>
        </div>

        <div>
            <h3>15</h3>
            <p>Años de experiencia</p>
        </div>

    </div>

</section>

<section class="testimonios">

    <h2>Testimonios</h2>

    <div class="testimonios-contenedor">

        <div class="testimonio">

            <p>
                "Gracias a Caminos Armónicos pude desarrollar mis habilidades
                musicales y presentarme en escenarios profesionales."
            </p>

            <h4>Sofía Ramírez</h4>

        </div>

        <div class="testimonio">

            <p>
                "Los profesores tienen una excelente metodología y hacen
                que aprender música sea una experiencia increíble."
            </p>

            <h4>Daniel Vargas</h4>

        </div>

    </div>

</section>

<footer>

    <h3>Caminos Armónicos</h3>

    <p>Facebook | Instagram | YouTube</p>

    <p>© 2026 Caminos Armónicos</p>

</footer>

<!-- <script src="js/index.js"></script> -->

</body>
</html>