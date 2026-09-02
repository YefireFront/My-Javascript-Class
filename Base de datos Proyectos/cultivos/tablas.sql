CREATE DATABASE cultivacol;

USE cultivacol;

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    contrasena VARCHAR(100)
);

CREATE TABLE ciudades (
    id_ciudad INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    departamento VARCHAR(100),
    altura INT,
    clima VARCHAR(50)
);

CREATE TABLE cultivos (
    id_cultivo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    descripcion VARCHAR(255),
    tiempo_cosecha INT
);

CREATE TABLE calendario_siembra (
    id_calendario INT PRIMARY KEY AUTO_INCREMENT,
    id_cultivo INT,
    id_ciudad INT,
    mes_inicio INT,
    mes_fin INT,
    recomendacion VARCHAR(255),
    FOREIGN KEY (id_cultivo) REFERENCES cultivos(id_cultivo),
    FOREIGN KEY (id_ciudad) REFERENCES ciudades(id_ciudad)
);

CREATE TABLE siembras (
    id_siembra INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_cultivo INT,
    id_ciudad INT,
    fecha_siembra DATE,
    espacio VARCHAR(100),
    fecha_estimada_cosecha DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_cultivo) REFERENCES cultivos(id_cultivo),
    FOREIGN KEY (id_ciudad) REFERENCES ciudades(id_ciudad)
);

CREATE TABLE registros_cultivo (
    id_registro INT PRIMARY KEY AUTO_INCREMENT,
    id_siembra INT,
    fecha DATE,
    tipo VARCHAR(50),
    observacion VARCHAR(255),
    foto VARCHAR(255),
    FOREIGN KEY (id_siembra) REFERENCES siembras(id_siembra)
);

