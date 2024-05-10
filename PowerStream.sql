-- Base de datos de PowerStream
drop database powerstream;

create database powerstream if not exists;

use powerstream;

create table usuarios(
    id_usuario int auto_increment primary key,
    email varchar(50) unique not null,
    password varchar(30) not null,
    plan varchar(20) not null,
    fecha_suscripcion date not null,
    fecha_renovacion date not null,
    pagado boolean
);

create table videos(
    id_video int auto_increment primary key,
    titulo varchar(255) unique not null,
    descripcion varchar(255) not null,
    tipo varchar(40) not null,
    genero varchar(50) not null,
    fecha_subida date not null,
    video varchar(255) unique not null,
    img_portada varchar(40) not null,   
    img_publi varchar(255) NOT NULL,
    nom_publi varchar(255) NOT NUlL
);

create table lista(
    id_video int references videos(id_video),
    id_usuario int references usuarios(id_usuario),
    titulo varchar(40) references videos(titulo)
);


DELIMITER //

CREATE PROCEDURE prueba1()
BEGIN
    SELECT id_video, titulo,LEFT(descripcion, 5), tipo, genero, fecha_subida, video, img_portada, img_publi, nom_publi, FROM videos;
END //

DELIMITER ;