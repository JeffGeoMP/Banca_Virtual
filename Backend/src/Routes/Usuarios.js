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

app.get('/transacciones/:id', async(req, res)=>{
	try {
		db.query(Consulta.transacciones(req.params.id), (err, data) => {
			if (err) {
				res.status(200).json(null);
			} else {
				res.status(200).json(data.rows);
			}
		});
	} catch (error) {
		console.log(error);
        res.status(500).send(error);
	}
});

module.exports = app;
