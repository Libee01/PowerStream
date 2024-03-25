-- Base de datos de PowerStream
drop database powerstream;

create database powerstream if not exists;

use powerstream;

create table usuarios(
    ID_usuario int auto_increment primary key,
    email varchar(50) unique not null,
    password varchar(30) not null,
    plan varchar(20) not null,
    fecha_suscripcion date not null,
    fecha_renovacion date not null,
    pagado boolean
);

create table videos(
    ID_video int auto_increment primary key,
    titulo varchar(255) unique not null,
    video varchar(255) unique not null,
    portada varchar(40) not null,
    descripcion varchar(255) not null,
    tipo varchar(40) not null,
    plan varchar(20) references usuarios(plan),
    genero varchar(50) not null,
    fecha_subida date not null
);

create table lista(
    ID_video int references videos(ID_video),
    ID_usuario int references usuarios(ID_usuario),
    titulo varchar(40) references videos(titulo)
);

CREATE TABLE prueba (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    portada VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL
    categoria varchar(50) NOT NULL,
    img_publi varchar(255) NOT NULL,
    nom_publi varchar(255) NOT NUlL
);
