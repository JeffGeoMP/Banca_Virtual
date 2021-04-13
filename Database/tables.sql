-- CREATE DATABASE Practica3y4;
CREATE TABLE Usuario(
    id_cuenta SERIAL NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dpi BIGINT NOT NULL,
    saldo DECIMAL NOT NULL,
    correo VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    PRIMARY KEY(id_cuenta)
);


CREATE TABLE Transferencia(
    id_transferencia SERIAL NOT NULL,
    fecha DATE NOT NULL,
    monto DECIMAL NOT NULL,
    id_emisor INT NOT NULL,
    id_receptor INT NOT NULL,
    FOREIGN KEY(id_emisor) REFERENCES Usuario(id_cuenta) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_receptor) REFERENCES Usuario(id_cuenta) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY(id_transferencia)
);

SELECT * from transferencia;
SELECT * from Usuario;

INSERT INTO usuario (nombres, apellidos, dpi, saldo, correo, pass)
 VALUES ('Arnaldo', 'Cruz', 2791808530101, 100.00, 'arnaldo@gmail.com', '1234'),
 VALUES ('Daniel', 'Ricciardo', 2791808530701, 100.00, 'daniel@gmail.com', '1234'),
 VALUES ('Marta', 'Flores', 2791808530202, 120.00, 'flores@gmail.com', '1234');
 
INSERT INTO transferencia (fecha, monto, id_emisor, id_receptor)
 VALUES ('11/04/2021', 50, 1, 2);
INSERT INTO transferencia (fecha, monto, id_emisor, id_receptor)
 VALUES ('11/04/2021', 25.50, 3, 1);
INSERT INTO transferencia (fecha, monto, id_emisor, id_receptor)
 VALUES ('11/04/2021', 12.10, 3, 2);
 
SELECT id_transferencia, fecha, monto, nombres, apellidos FROM transferencia
INNER JOIN (
	SELECT id_cuenta, nombres, apellidos FROM usuario
) as X
ON id_receptor = X.id_cuenta
WHERE id_emisor = 3;