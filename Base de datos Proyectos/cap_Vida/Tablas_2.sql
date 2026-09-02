CREATE DATABASE capsula_vida;

USE capsula_vida;

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    correo VARCHAR(100),
    contrasena VARCHAR(100)
);

CREATE TABLE pacientes (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    nombre VARCHAR(100),
    fecha_nacimiento DATE,
    diagnostico VARCHAR(100),
    fecha_diagnostico DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE acompanantes (
    id_acompanante INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    parentesco VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE paciente_acompanante (
    id_relacion INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    id_acompanante INT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente),
    FOREIGN KEY (id_acompanante) REFERENCES acompanantes(id_acompanante)
);

CREATE TABLE evaluaciones (
    id_evaluacion INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    fecha DATE,
    memoria INT,
    orientacion INT,
    estado_animo INT,
    observaciones VARCHAR(255),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);

CREATE TABLE medicamentos (
    id_medicamento INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    nombre VARCHAR(100),
    dosis VARCHAR(50),
    frecuencia VARCHAR(50),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);

CREATE TABLE citas_medicas (
    id_cita INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    fecha DATE,
    hora TIME,
    especialidad VARCHAR(100),
    descripcion VARCHAR(255),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);

CREATE TABLE recordatorios (
    id_recordatorio INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    tipo VARCHAR(50),
    descripcion VARCHAR(255),
    fecha_hora DATETIME,
    estado VARCHAR(20),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);

CREATE TABLE emergencias (
    id_emergencia INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    fecha_hora DATETIME,
    mensaje VARCHAR(255),
    estado VARCHAR(20),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);