const mysql = require('mysql');

const db = mysql.createPool({
	connectionLimit: 10,
	password:'',
	user:'root',
	database:'bibliotheque',
	host:'localhost',
});



module.exports = db;

