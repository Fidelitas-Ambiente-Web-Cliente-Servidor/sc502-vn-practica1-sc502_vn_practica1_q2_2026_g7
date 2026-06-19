
// 1. ARRAY DE PROFESORES

const profesores = [
    {
        id: 1,
        nombre: "María Zuñiga",
        especialidad: "Canto",
        descripcion: "Experta en técnica vocal y enseñanza profesional.",
        foto: "img/canto 01.jpg",
        correo: "maria@email.com",
        cursosQueImparte: "Canto básico, Canto avanzado"
    },
    {
        id: 2,
        nombre: "María Gómez",
        especialidad: "Guitarra",
        descripcion: "Especialista en guitarra acústica y eléctrica.",
        foto: "img/Pguitarra.jpg",
        correo: "gomez@email.com",
        cursosQueImparte: "Guitarra inicial, Guitarra pro"
    },
    {
        id: 3,
        nombre: "Carlos Ramírez",
        especialidad: "Piano",
        descripcion: "Profesor con experiencia en piano clásico.",
        foto: "img/pPiano.jpg",
        correo: "carlos@email.com",
        cursosQueImparte: "Piano básico, Piano clásico"
    },
    {
        id: 4,
        nombre: "Isaac ontoya",
        especialidad: "Batería",
        descripcion: "Enseña ritmo y técnica profesional de batería.",
        foto: "img/pbateria.jpg",
        correo: "isaac@email.com",
        cursosQueImparte: "Batería inicial, Percusión"
    },


{
        id: 5,
        nombre: "Lucas fernandes",
        especialidad: "Violin",
        descripcion: "Especialista en violin ",
        foto: "img/violin.jpg",
        correo: "lucafer511@gmail.com",
        cursosQueImparte: "Violin inicial"
        },

];


// 2. RENDER TARJETAS

const contenedor = document.getElementById("contenedorProfesores");

function renderProfesores() {
    contenedor.innerHTML = "";

    profesores.forEach(prof => {
        contenedor.innerHTML += `
        <div class="col-md-3 mb-3">
            <div class="card h-100 profesor-card" data-id="${prof.id}" style="cursor:pointer;">
                <img src="${prof.foto}" class="card-img-top">
                <div class="card-body">
                    <h5>${prof.nombre}</h5>
                    <p>${prof.especialidad}</p>
                </div>
            </div>
        </div>
        `;
    });

    activarEventos();
}


// 3. CLICK EN TARJETAS

function activarEventos() {
    const tarjetas = document.querySelectorAll(".profesor-card");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function () {

            const id = this.getAttribute("data-id");

            const profesor = profesores.find(p => p.id == id);

            abrirModal(profesor);
        });
    });
}


// ======================
// 4. ABRIR MODAL
// ======================
function abrirModal(prof) {

    document.getElementById("modalNombre").textContent = prof.nombre;
    document.getElementById("modalEspecialidad").textContent = prof.especialidad;
    document.getElementById("modalDescripcion").textContent = prof.descripcion;
    document.getElementById("modalCorreo").textContent = prof.correo;
    document.getElementById("modalCursos").textContent = prof.cursosQueImparte;
    document.getElementById("modalFoto").src = prof.foto;

    const modal = new bootstrap.Modal(document.getElementById("modalProfesor"));
    modal.show();
}


// ======================
// 5. INICIO
// ======================
renderProfesores();