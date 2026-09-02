DROP DATABASE IF EXISTS districonecta;
CREATE DATABASE districonecta;
USE districonecta;

CREATE TABLE usuario (
    id_usuario     INT AUTO_INCREMENT PRIMARY KEY,
    email          VARCHAR(120) NOT NULL UNIQUE,
    password_hash  VARCHAR(255) NOT NULL,
    rol            ENUM('distribuidora','negocio','admin') NOT NULL,
    activo         TINYINT NOT NULL DEFAULT 1,
    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE distribuidora (
    id_distribuidora INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario       INT NOT NULL UNIQUE,
    nit              VARCHAR(20) NOT NULL UNIQUE,
    razon_social     VARCHAR(120) NOT NULL,
    telefono         VARCHAR(20) NOT NULL,
    direccion        VARCHAR(150),
    ciudad           VARCHAR(80) NOT NULL DEFAULT 'Medellin',
    pedido_minimo    DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE negocio (
    id_negocio INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL UNIQUE,
    nombre     VARCHAR(120) NOT NULL,
    tipo       ENUM('tienda','supermercado','minimercado','restaurante','cafeteria','otro') NOT NULL,
    nit        VARCHAR(20),
    direccion  VARCHAR(150) NOT NULL,
    barrio     VARCHAR(80),
    ciudad     VARCHAR(80) NOT NULL DEFAULT 'Medellin',
    telefono   VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE producto (
    id_producto      INT AUTO_INCREMENT PRIMARY KEY,
    id_distribuidora INT NOT NULL,
    nombre           VARCHAR(120) NOT NULL,
    descripcion      VARCHAR(255),
    unidad_venta     ENUM('unidad','caja','paca','bulto') NOT NULL DEFAULT 'unidad',
    precio           DECIMAL(12,2) NOT NULL,
    stock            INT NOT NULL DEFAULT 0,
    activo           TINYINT NOT NULL DEFAULT 1,
    FOREIGN KEY (id_distribuidora) REFERENCES distribuidora (id_distribuidora)
);

CREATE TABLE pedido (
    id_pedido         INT AUTO_INCREMENT PRIMARY KEY,
    id_negocio        INT NOT NULL,
    id_distribuidora  INT NOT NULL,
    fecha             DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado            ENUM('pendiente','confirmado','en_ruta','entregado','cancelado') NOT NULL DEFAULT 'pendiente',
    total             DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    direccion_entrega VARCHAR(150) NOT NULL,
    observaciones     VARCHAR(255),
    FOREIGN KEY (id_negocio) REFERENCES negocio (id_negocio),
    FOREIGN KEY (id_distribuidora) REFERENCES distribuidora (id_distribuidora)
);

CREATE TABLE detalle_pedido (
    id_detalle      INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido       INT NOT NULL,
    id_producto     INT NOT NULL,
    cantidad        INT NOT NULL,
    precio_unitario DECIMAL(12,2) NOT NULL,
    subtotal        DECIMAL(12,2) NOT NULL,
    UNIQUE (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido),
    FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
);