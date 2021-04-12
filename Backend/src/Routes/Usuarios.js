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

app.post('/actualizaremisor',async (req,res) => {
	try {
		db.query(Consulta.actualizarsaldoemisor(req.body.id,Number(req.body.monto)),(err,data)=>{
			console.log(err);
			if (err) {
				res.status(200).json(null);
			} else{
				res.status(200).json({"msg":"true"})
			}
		})
	} catch (error){
		res.send(null);
	}
});

app.post('/actualizareceptor',async (req,res) => {
	try {
		db.query(Consulta.actualizarsaldoreceptor(req.body.id,Number(req.body.monto)),(err,data)=>{
			if (err) {
				res.status(200).json(null);
			} else{
				res.status(200).json({"msg":"true"})
			}
		})
	} catch (error){
		res.send(null);
	}
});

module.exports = app;
