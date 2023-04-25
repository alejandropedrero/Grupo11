CREATE DATABASE IF NOT EXISTS tecladb;

USE tecladb;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    username VARCHAR(15) NOT NULL, 
    PRIMARY KEY(id)
);

INSERT INTO usuarios (id_usuario, nombre_completo, nombre_usuario, correo_electronico, fecha_nacimiento, ubicacion, genero, intereses) 
VALUES (1, 'Juan Perez', 'jperez', 'jperez@example.com', '1990-01-01', 'Ciudad de Mexico', 'Masculino', 'Deportes,

INSERT INTO usuarios (id_usuario, nombre_completo, nombre_usuario, correo_electronico, fecha_nacimiento, ubicacion, genero, intereses) 
VALUES (1, 'Juan Perez', 'jperez', 'jperez@example.com', '1990-01-01', 'Ciudad de Mexico', 'Masculino', 'Deportes,

INSERT INTO usuarios (id_usuario, nombre_completo, nombre_usuario, correo_electronico, fecha_nacimiento, ubicacion, genero, intereses) 
VALUES (1, 'Juan Perez', 'jperez', 'jperez@example.com', '1990-01-01', 'Ciudad de Mexico', 'Masculino', 'Deportes,

DESCRIBE user;