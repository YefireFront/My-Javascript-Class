CREATE DATABASE plataforma_belleza
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE plataforma_belleza;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    rol ENUM('usuario', 'editor', 'administrador') NOT NULL DEFAULT 'usuario',
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE perfil_usuario (
    id_perfil INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL UNIQUE,
    tipo_piel ENUM('seca', 'grasa', 'mixta', 'normal'),
    tipo_cabello ENUM('liso', 'ondulado', 'rizado', 'afro'),
    cuero_cabelludo ENUM('seco', 'graso', 'mixto'),
    sensibilidad BOOLEAN NOT NULL DEFAULT FALSE,
    objetivo VARCHAR(120),
    CONSTRAINT fk_perfil_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
);

CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(255)
);

CREATE TABLE ingrediente (
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL UNIQUE,
    descripcion TEXT,
    es_alergeno BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    marca VARCHAR(100),
    descripcion TEXT,
    imagen_url VARCHAR(255),
    tipo_piel ENUM('seca', 'grasa', 'mixta', 'normal'),
    tipo_cabello ENUM('liso', 'ondulado', 'rizado', 'afro'),
    CONSTRAINT fk_producto_categoria
        FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria)
);

CREATE TABLE producto_ingrediente (
    id_producto INT NOT NULL,
    id_ingrediente INT NOT NULL,
    concentracion VARCHAR(20),
    PRIMARY KEY (id_producto, id_ingrediente),
    CONSTRAINT fk_prodingr_producto
        FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
        ON DELETE CASCADE,
    CONSTRAINT fk_prodingr_ingrediente
        FOREIGN KEY (id_ingrediente) REFERENCES ingrediente (id_ingrediente)
);

CREATE TABLE contenido (
    id_contenido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    id_producto INT,
    titulo VARCHAR(180) NOT NULL,
    cuerpo TEXT NOT NULL,
    tipo ENUM('articulo', 'noticia', 'consejo', 'resena') NOT NULL,
    calificacion TINYINT,
    fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('borrador', 'publicado') NOT NULL DEFAULT 'borrador',
    CONSTRAINT fk_contenido_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
    CONSTRAINT fk_contenido_categoria
        FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria),
    CONSTRAINT fk_contenido_producto
        FOREIGN KEY (id_producto) REFERENCES producto (id_producto),
    CONSTRAINT chk_contenido_resena CHECK (
        (tipo = 'resena' AND id_producto IS NOT NULL AND calificacion BETWEEN 1 AND 5)
        OR (tipo <> 'resena' AND calificacion IS NULL)
    )
);
