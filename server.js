const express = require('express');
const app = new express();

app.use(express.json());

app.get("/",function(req,res){
	//res.send('hello world');
	var person = {"name":"zhen","age":32};
	res.send(person);
});

app.listen(3000);
