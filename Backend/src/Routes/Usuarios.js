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
			if(data != undefined && data.rows.length == 1){
				res.status(200).send(data.rows);

			}else {
				res.send(null);
			}
		});
		
		/*console.log(Metadata.rows)
		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(400).json();
		}*/
	} catch (error) {
		res.status(400).json(null);
	}
});


app.get('/usuario/saldo/:idUsu', async (req, res)=>{
	try {
		const Metadata = await db.query(Consulta.ConsultarSaldo(req.params.idUsu));
	
		if(Metadata.rowCount > 0){
			res.status(200).json(Metadata.rows);
		}else{
			res.status(400).json();
		}
	} catch (error) {
		res.status(500).send(error);
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
app.post('/transferencia',async (req,res) => {
	try {
		let datos = req.body;
		var moment = require('moment')
		var created = moment().format('YYYY-MM-DD hh:mm:ss');
		db.query(Consulta.inserttransfer(created,Number(datos.monto),datos.id_emisor,Number(datos.id_receptor)),(err,data)=>{
			if (err) {
				res.status(200).json(null);
			} else{
				db.query(Consulta.actualizarsaldoemisor(datos.id_emisor,Number(datos.monto)),(err,data)=>{
					if (err) {
						res.status(200).json(null);
					} else{
						db.query(Consulta.actualizarsaldoreceptor(Number(datos.id_receptor),Number(datos.monto)),(err,data)=>{
							if (err) {
								res.status(200).json(null);
							} else{
								res.status(200).json({"msg":"true"});
							}
						});
					}
				});
			}
		});


	} catch (error){
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
				res.status(200).json({error:err});
			} else {
				res.status(200).json({codigo:"193"+cuenta+"578911"});
			}
		});
		
		/*console.log(Metadata.rows)
		if (Metadata.rowCount > 0) {
			res.status(200).json(Metadata.rows);
		} else {
			res.status(400).json();
		}*/
	} catch (error) {
		res.send({error:error});
	}
});


module.exports = app;
