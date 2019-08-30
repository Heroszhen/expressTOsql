const express = require('express');
const app = new express();

const db = require('./db.js');

app.use(express.json());

app.get("/",function(req,res,next){
	db.query('select * from abonne',(error,result)=>{
		if(error) throw error;
		res.send(result);
	});
});

app.listen(3000);
