var express = require('express');
var mysql = require('mysql');
var app = express();
var ejs = require('ejs');
//var pg = require('pg');
var HOST = '127.0.0.1';
var PORT = 3000;
var MYSQL_USER = 'root';
var MYSQL_PASS = '';
var DATABASE = 'connect_project';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//var conString = process.env.DATABASE_URL || "postgres://postgres:Emdsystems@localhost:5432/student";
//var client = new pg.Client(conString);
//client.connect();

var mysql = mysql.createConnection({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database:DATABASE,
        
});
app.get('/',function(req,res,next){
    res.sendfile('./App.js');
    });
    app.post('/myaction', function(req, res) {
    console.log('req.body');
    console.log(req.body);
    

    mysql.query("INSERT INTO user_details (id,First_name,Last_name,Email,Address,Phone,Gender,Working_position,Company,Institute,Birthday) VALUES ('"+req.body.fname+"','"+req.body.lname+"','"+req.body.email+"','"+req.body.adress+"','"+req.body.phone+"','"+req.body.gender+"','"+req.body.working_post+"','"+req.body.works_at+"','"+req.body.institute+"','"+req.body.birthday+"')",function (error, results, fields){
    if (error) throw error;
    res.send(JSON.stringify(results));
    res.end();
  });
});
app.listen(3000);
console.log(' app listening at port:3000');