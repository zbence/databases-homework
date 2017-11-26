const http = require('http')
const port = 3000

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysqldb',
  port     : 3306,
  user     : 'me',
  password : 'secret',
  database : 'my_db',
});

//connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.on('error', function(err) {
  console.log(err)
})
connection.end();

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
  
})

