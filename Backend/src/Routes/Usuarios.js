const { Router } = require("express");
const { Consultas } = require("../Funcionalidades/Consultas");

const db = require("../../config");

const Consulta = new Consultas();
const app = Router();


/**
 * @description Ruta para Loguear un Usuario
 */
app.post('/login', async (req, res) => {
	try {
		db.query(Consulta.VerificarUsuario(req.body.User, req.body.Pass), (err, data) => {
			if (err) {
				res.status(200).json(null);
			} else {
				res.status(200).json(data.rows);
			}
		});
		
		/*console.log(Metadata.rows)
		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(400).json();
		}*/
	} catch (error) {
		res.send(null);
	}
});


app.post('/registro', async (req, res) => {
	try {
		let nombre=req.body.nombre;
		let apellido=req.body.apellido;
		let dpi=req.body.dpi;
		let cuenta=req.body.cuenta;
		let saldo=req.body.saldo;
		let correo=req.body.correo;
		let contrasenia=req.body.contrasenia;
		db.query(Consulta.Registrar(nombre,apellido,dpi,cuenta,saldo,correo,contrasenia), (err, data) => {
			if (err) {
				res.status(200).json(null);
			} else {
				res.status(200).json({codigo:123});
			}
		});
		
		/*console.log(Metadata.rows)
		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(400).json();
		}*/
	} catch (error) {
		res.send(null);
	}
});


module.exports = app;
