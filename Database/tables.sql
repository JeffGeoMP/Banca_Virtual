CREATE DATABASE Practica3y4;


CREATE TABLE Usuario(
id_cuenta serial,
nombres VARCHAR(100) NOT NULL,
apellidos VARCHAR(100) NOT NULL,
dpi BIGINT NOT NULL,
saldo DECIMAL NOT NULL,
correo VARCHAR(100) NOT NULL,
pass VARCHAR(100) NOT NULL,
PRIMARY KEY(id_cuenta)
);


CREATE TABLE Transferencia(
id_transferencia INT NOT NULL,
fecha DATE NOT NULL,
monto DECIMAL NOT NULL,
id_emisor INT NOT NULL,
id_receptor INT NOT NULL,
FOREIGN KEY(id_emisor) REFERENCES Usuario(id_cuenta) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(id_receptor) REFERENCES Usuario(id_cuenta) ON DELETE CASCADE ON UPDATE CASCADE,
PRIMARY KEY(id_transferencia)
);

