-- Base de datos de PowerStream

create database PowerStream if not exists;

create table usuarios(
    ID_usuario int auto_increment primary key,
    email varchar(50) unique not null,
    password varchar(30) not null,
    plan varchar(20) not null,
    fecha_suscripcion date not null,
    fecha_renovacion date not null,
    pagado boolean
)

create table videos(
    ID_video int auto_increment primary key,
    titulo varchar(40) unique not null,
    descripcion varchar(200) not null,
    tipo varchar(40) not null,
    plan varchar(20) references usuarios(plan),
    genero varchar(50) not null,
    fecha_subida date not null
)

create table lista(
    ID_video int references videos(ID_video),
    ID_usuario int references usuarios(ID_usuario),
    titulo varchar(40) references videos(titulo)
)