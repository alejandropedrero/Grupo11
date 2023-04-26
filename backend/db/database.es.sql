CREATE DATABASE IF NOT EXISTS tecladb;

use tecladb;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100),
    foto_perfil VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE amigos (
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_amigo INT NOT NULL,
    fecha_amistad DATE NOT NULL,
    estado_solicitud VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_amigo) REFERENCES usuarios(id)
);

CREATE TABLE publicaciones (
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    texto VARCHAR(280) NOT NULL,
    fecha_publicacion DATETIME NOT NULL,
    num_likes INT NOT NULL,
    num_comentarios INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT NOT NULL AUTO_INCREMENT,
    id_publicacion INT NOT NULL,
    id_usuario INT NOT NULL,
    texto VARCHAR(280) NOT NULL,
    fecha_comentario DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE mensajes (
    id INT NOT NULL AUTO_INCREMENT,
    id_remitente INT NOT NULL,
    id_destinatario INT NOT NULL,
    texto VARCHAR(500) NOT NULL,
    fecha_mensaje DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_remitente) REFERENCES usuarios(id),
    FOREIGN KEY (id_destinatario) REFERENCES usuarios(id)
);

CREATE TABLE grupos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    id_creador INT NOT NULL,
    descripcion VARCHAR(280) NOT NULL,
    fecha_creacion DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_creador) REFERENCES usuarios(id)
);

CREATE TABLE eventos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    fecha_hora_evento DATETIME NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    descripcion VARCHAR(280) NOT NULL,
    id_creador INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_creador) REFERENCES usuarios(id)
);

CREATE TABLE notificaciones (
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    tipo_notificacion VARCHAR(50) NOT NULL,
    texto VARCHAR(280) NOT NULL,
    fecha_notificacion DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)

INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, email, contrasena, ubicacion)
VALUES ('David', 'Montero', '1992-10-05', 'Dxworld@gmail.com', 'password123', 'Gijón');

INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, email, contrasena, ubicacion)
VALUES ('Sonia', 'Bueno', '1992-10-05', 'bueno.g.sonia@gmail.com', 'password123', 'Gijón');

INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, email, contrasena, ubicacion)
VALUES ('Alejandro', 'Pedrero', '1988-09-29', 'apedrerovega@gmail.com', 'password123', 'Gijón');
