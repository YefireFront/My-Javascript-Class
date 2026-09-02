DROP DATABASE IF EXISTS localexpress_c;
CREATE DATABASE localexpress_c;

USE localexpress_c;

CREATE TABLE usuarios (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    nombre          VARCHAR(100)    NOT NULL,
    correo          VARCHAR(150)    NOT NULL,
    contrasena      VARCHAR(255)    NOT NULL,
    telefono        VARCHAR(20)     NULL,
    foto_url        VARCHAR(255)    NULL,
    activo          TINYINT(1)      NOT NULL DEFAULT 1,
    fecha_registro  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clientes (
    usuario_id          INT PRIMARY KEY,
    direccion_principal VARCHAR(255)    NULL,
    fecha_nacimiento    DATE            NULL,

    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE vendedores (
    usuario_id      INT PRIMARY KEY,
    documento       VARCHAR(30)     NULL,
    verificado      TINYINT(1)      NOT NULL DEFAULT 0,
    fecha_ingreso   DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE tiendas (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    vendedor_id     INT             NOT NULL,
    nombre          VARCHAR(120)    NOT NULL,
    descripcion     TEXT            NULL,
    logo_url        VARCHAR(255)    NULL,
    direccion       VARCHAR(255)    NOT NULL,
    latitud         DECIMAL(10, 8)  NULL,
    longitud        DECIMAL(11, 8)  NULL,
    telefono        VARCHAR(20)     NULL,
    estado          ENUM('activa', 'inactiva', 'suspendida') NOT NULL DEFAULT 'activa',
    fecha_creacion  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (vendedor_id) REFERENCES vendedores (usuario_id)
);

CREATE TABLE categorias (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nombre      VARCHAR(80)     NOT NULL,
    descripcion VARCHAR(255)    NULL,
    icono_url   VARCHAR(255)    NULL
);

CREATE TABLE productos (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    tienda_id       INT             NOT NULL,
    categoria_id    INT             NULL,
    nombre          VARCHAR(120)    NOT NULL,
    descripcion     TEXT            NULL,
    precio          DECIMAL(10, 2)  NOT NULL DEFAULT 0.00,
    stock           INT             NOT NULL DEFAULT 0,
    imagen_url      VARCHAR(255)    NULL,
    disponible      TINYINT(1)      NOT NULL DEFAULT 1,
    fecha_creacion  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (tienda_id)    REFERENCES tiendas (id),
    FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);

CREATE TABLE pedidos (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id          INT             NOT NULL,
    tienda_id           INT             NOT NULL,
    estado              ENUM('pendiente', 'confirmado', 'preparando', 'enviado', 'entregado', 'cancelado')
                                        NOT NULL DEFAULT 'pendiente',
    metodo_pago         ENUM('efectivo', 'transferencia', 'tarjeta')
                                        NOT NULL DEFAULT 'efectivo',
    total               DECIMAL(10, 2)  NOT NULL DEFAULT 0.00,
    direccion_entrega   VARCHAR(255)    NOT NULL,
    notas               VARCHAR(255)    NULL,
    fecha_pedido        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (cliente_id) REFERENCES clientes (usuario_id),
    FOREIGN KEY (tienda_id)  REFERENCES tiendas (id)
);

CREATE TABLE detalle_pedido (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id       INT             NOT NULL,
    producto_id     INT             NOT NULL,
    cantidad        INT             NOT NULL DEFAULT 1,
    precio_unitario DECIMAL(10, 2)  NOT NULL,
    subtotal        DECIMAL(10, 2)  NOT NULL DEFAULT 0.00,

    FOREIGN KEY (pedido_id)   REFERENCES pedidos (id),
    FOREIGN KEY (producto_id) REFERENCES productos (id)
);

CREATE TABLE calificaciones (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id       INT             NOT NULL,
    cliente_id      INT             NOT NULL,
    tienda_id       INT             NOT NULL,
    puntuacion      TINYINT         NOT NULL DEFAULT 5,
    comentario      TEXT            NULL,
    fecha           DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (pedido_id)  REFERENCES pedidos (id),
    FOREIGN KEY (cliente_id) REFERENCES clientes (usuario_id),
    FOREIGN KEY (tienda_id)  REFERENCES tiendas (id)
);
