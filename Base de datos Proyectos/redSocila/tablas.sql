CREATE DATABASE red_experiencias;
USE red_experiencias;

CREATE TABLE usuarios (
    id_usuario 		INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario 	VARCHAR(30) NOT NULL UNIQUE,
    correo 			VARCHAR(150) NOT NULL UNIQUE,
    contrasena_hash VARCHAR(255) NOT NULL,
    biografia 		TEXT,
    foto_perfil 	VARCHAR(255),
    rol 			ENUM('usuario', 'admin') NOT NULL DEFAULT 'usuario',
    estado 			ENUM('activo', 'suspendido', 'eliminado') NOT NULL DEFAULT 'activo',
    fecha_registro 	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias (
    id_categoria 	INT AUTO_INCREMENT PRIMARY KEY,
    nombre 			VARCHAR(50) NOT NULL UNIQUE,
    descripcion 	VARCHAR(255),
    activa 			BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE publicaciones (
    id_publicacion 	INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario 		INT NOT NULL,
    id_categoria 	INT NOT NULL,
    titulo 			VARCHAR(150),
    contenido 		TEXT NOT NULL,
    es_anonimo 		BOOLEAN NOT NULL DEFAULT FALSE,
    estado 			ENUM('publicada', 'oculta', 'eliminada') NOT NULL DEFAULT 'publicada',
    fecha_publicacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE comentarios (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_publicacion INT NOT NULL,
    id_usuario INT NOT NULL,
    contenido TEXT NOT NULL,
    es_anonimo BOOLEAN NOT NULL DEFAULT FALSE,
    estado ENUM('publicado', 'eliminado') NOT NULL DEFAULT 'publicado',
    fecha_comentario DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE reacciones (
    id_reaccion INT AUTO_INCREMENT PRIMARY KEY,
    id_publicacion INT NOT NULL,
    id_usuario INT NOT NULL,
    tipo ENUM('apoyo', 'me_identifico', 'animo', 'gracias') NOT NULL,
    fecha_reaccion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id_publicacion, id_usuario),
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE reportes (
    id_reporte INT AUTO_INCREMENT PRIMARY KEY,
    id_publicacion INT NOT NULL,
    id_usuario_reporta INT NOT NULL,
    motivo ENUM('ilegal', 'violencia', 'odio', 'spam', 'otro') NOT NULL,
    descripcion VARCHAR(500),
    estado ENUM('pendiente', 'revisado', 'desestimado') NOT NULL DEFAULT 'pendiente',
    fecha_reporte DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id_publicacion, id_usuario_reporta),
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion),
    FOREIGN KEY (id_usuario_reporta) REFERENCES usuarios(id_usuario)
);
