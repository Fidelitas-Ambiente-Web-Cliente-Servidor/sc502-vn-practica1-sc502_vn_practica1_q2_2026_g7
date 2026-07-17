CREATE TABLE cursos_destacados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(50),
    imagen VARCHAR(255),
    duracion VARCHAR(50)
);

INSERT INTO cursos_destacados (titulo, descripcion, categoria, imagen, duracion)
VALUES
('Guitarra Básica', 'Aprende desde cero', 'Instrumentos', 'guitarra.jpg', '8 semanas'),
('Piano Inicial', 'Curso para principiantes', 'Instrumentos', 'piano.jpg', '10 semanas'),
('Canto Popular', 'Técnicas vocales', 'Vocal', 'canto.jpg', '6 semanas'),
('Violín', 'Nivel básico', 'Instrumentos', 'violin.jpg', '12 semanas'),
('Batería', 'Ritmo y coordinación', 'Percusión', 'bateria.jpg', '9 semanas');