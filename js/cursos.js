
const cursos = [
    {
        nombre: "Guitarra ",
        descripcion: "Aprende acordes y canciones básicas.",
        categoria: "Instrumentos",
        duracion: "5 meses",
        precio: "$25 por mes",
        imagen: "" 
    },
      {
        nombre: "Piano basico  ",
        descripcion: "Conoce acordes, ritmos y acompañamientos para tocar canciones modernas y clásicas.",
        categoria: "Instrumentos",
        duracion: "2 meses",
        precio: "$25 por mes",
        imagen: "" 
    },
     
     {
        nombre: "Bateria moderna   ",
        descripcion: "Desarrolla coordinación, velocidad y práctica de ritmos musicales modernos en batería.",
        categoria: "Instrumentos",
        duracion: "4 meses",
        precio: "$40 por mes",
        imagen: "" 
    },


      {
        nombre: "Canto basico    ",
        descripcion: "Curso enfocado en mejorar la potencia vocal, la pronunciación y la seguridad al cantar diferentes estilos musicales.",
        categoria: "Canto",
        duracion: "3 meses",
        precio: "$35 por mes",
        imagen: "" 
    },

    {
        nombre: "Canto profesional   ",
        descripcion: "Desarrolla habilidades avanzadas de interpretación, presencia escénica y preparación para presentaciones en vivo. ",
        categoria: "Canto",
        duracion: "4 meses",
        precio: "$55 por mes",
        imagen: "" 
    },
    
     {
        nombre: "Tecnicas vocales  ",
        descripcion: " Curso enfocado en mejorar la potencia vocal, la pronunciación y la seguridad al cantar diferentes estilos musicales",
        categoria: "Canto",
        duracion: "3 meses",
        precio: "$40 por mes",
        imagen: "" 
    },
]
onst contenedor = document.getElementById("listaCursos");

cursos.forEach(curso => {

    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
        <h3>${curso.nombre}</h3>
        <p>${curso.descripcion}</p>
        <p><strong>Categoría:</strong> ${curso.categoria}</p>
        <p><strong>Duración:</strong> ${curso.duracion}</p>
        <p><strong>Precio:</strong> ${curso.precio}</p>
        <hr>
    `;

    contenedor.appendChild(tarjeta);

});

const busqueda = document.getElementById("buscar");
const categoria = document.getElementById("categoria");

function mostrarCursos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(curso => {

        contenedor.innerHTML += `
            <div>
                <h3>${curso.nombre}</h3>
                <p>${curso.descripcion}</p>
                <p>Categoría: ${curso.categoria}</p>
                <p>Duración: ${curso.duracion}</p>
                <p>Precio: ${curso.precio}</p>
                <hr>
            </div>
        `;
    });
}

function filtrarCursos() {

    let texto = busqueda.value.toLowerCase();
    let cat = categoria.value;

    let resultado = cursos.filter(curso => {

        let coincideTexto =
            curso.nombre.toLowerCase().includes(texto) ||
            curso.descripcion.toLowerCase().includes(texto);

        let coincideCategoria =
            cat === "Todos" ||
            curso.categoria === cat;

        return coincideTexto && coincideCategoria;
    });

    mostrarCursos(resultado);
}

busqueda.addEventListener("input", filtrarCursos);
categoria.addEventListener("change", filtrarCursos);

mostrarCursos(cursos);

Pero para que eso funcione, en el HTML sí necesitas al menos estos tres elementos:

<input type="text" id="buscar">

<select id="categoria">
    <option value="Todos">Todos</option>
    <option value="Instrumentos">Instrumentos</option>
    <option value="Canto">Canto</option>
</select>

<div id="listaCursos"></div>


