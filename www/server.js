const port = 3000

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysqldb',
  port     : 3306,
  user     : 'me',
  password : 'secret',
  database : 'my_db',
});

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
var $ = require('jquery');
var express = require('express');    
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'css')));

app.get("/",function(req,resp){
  resp.sendFile("/node/www/index.html");
})

app.get("/sofor",function(req,resp){

  
  connection.query('SELECT *  from sofor', function (error, results, fields) {
    if (error) throw error;
    resp.send(JSON.stringify(results));
    
  });

})

app.get("/jarmu", function(req,resp){
  connection.query('SELECT *  from jarmu', function (error, results, fields) {
    if (error) throw error;
    resp.send(JSON.stringify(results));
    
  });
})

app.get("/jarat", function(req,resp){
  connection.query('SELECT *  from jarat', function (error, results, fields) {
    if (error) throw error;
    resp.send(JSON.stringify(results));
    
  });
})

app.get("/megallo", function(req,resp){
  connection.query('SELECT *  from megallo', function (error, results, fields) {
    if (error) throw error;
    resp.send(JSON.stringify(results));
    
  });
})
app.post("/sofor", function(req,resp){

 
  
  connection.query('INSERT INTO sofor SET ?',req.body, function (error, results, fields) {
    if (error) throw error;
    resp.send("ok");
    
  });
})

app.post("/jarmu", function(req,resp){
      
    connection.query('INSERT INTO jarmu SET ?',req.body, function (error, results, fields) {
      if (error) throw error;
      resp.send("ok");
      
    });
  })

  app.post("/jarat", function(req,resp){

    console.log(req.body)
    
  connection.query('INSERT INTO jarat SET ?',req.body, function (error, results, fields) {
    if (error) throw error;
    resp.send("ok");
    
  });
})

app.post("/megallo", function(req,resp){
  
      console.log(req.body)
      
    connection.query('INSERT INTO megallo SET ?',req.body, function (error, results, fields) {
      if (error) throw error;
      resp.send("ok");
      
    });
  })

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.on('error', function(err) {
  console.log(err)
})


app.listen(3000);