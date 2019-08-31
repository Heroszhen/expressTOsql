const express = require('express');
const app = new express();

const db = require('./db.js');

app.use(express.json());

app.get("/",function(req,res,next){
	db.query('select * from abonne',(error,result)=>{
		if(error) res.send(error);
		let myreturn = {
			"response":"ok",
			"data":result
		};
		res.send(myreturn);
	});
});

app.get("/abonne",function(req,res,next){
	var query = req.query;
	if((query.prenom === undefined && query.id_abonne === undefined) || (query.prenom !== undefined && query.id_abonne !== undefined)){
		var myreturn = {
			"response":"error"
		};
		res.send(myreturn);
	}else{
		if(query.prenom !== undefined){
			db.query('select * from abonne where prenom = ?',query.prenom,(error,result)=>{
				if(error) res.send(error);
				var myreturn = {
					"response":"ok",
					"data":result
				};
				res.send(myreturn);
			});
		}
		
		if(query.id_abonne !== undefined){
			db.query('select * from abonne where id_abonne = ?',query.id_abonne,(error,result)=>{
				if(error) res.send(error);
				var myreturn = {
					"response":"ok",
					"data":result
				};
				res.send(myreturn);
			});
		}
	}
	
});

app.listen(3000);
