const cursos = [
    {
        nombre: "Piano",
        descripcion: "Aprender técnica, interpretación y lectura musical.",
        imagen: "img/piano.jpg",
        categoria: "Instrumento"
    },

    {
        nombre: "Guitarra",
        descripcion: "Desarrolla tus habilidades en guitarra acústica y eléctrica.",
        imagen: "img/guitarra.jpg",
        categoria: "Instrumento"
    },

    {
        nombre: "Canto",
        descripcion: "Mejora tu técnica vocal y expresión artística.",
        imagen: "img/canto.jpg",
        categoria: "Vocal"
    }
];


/*const contenedor = document.getElementById("contenedor-cursos");


cursos.forEach(curso => {

    const tarjeta = document.createElement("div");
    tarjeta.className = "curso";

    const imagen = document.createElement("img");
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = curso.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = curso.descripcion;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + curso.categoria;

    const boton = document.createElement("a");
    boton.href = "cursos.html";
    boton.className = "boton-curso";
    boton.textContent = "Ver más";

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(categoria);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);

});*/