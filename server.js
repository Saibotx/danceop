// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'application/jsonnpm'});
//   res.end('Hello New York Lydia\n');
// }).listen(8888);
// console.log('Server running at http://localhost:3001/');

var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
fs = require('fs');



var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

// app.use(bodyParser());

require('./models/musician.js');
require('./routes')(app);

app.listen(8899);
console.log('Listening on port 3001...');

// // var app = express();

// // require('./routes')(app);

// // app.listen(8888);
// console.log("Jammin\' on port 3001...");


// var express = require('express');
// var app = express();

// app.get('/hello/:name', function(req, res) {
// 	console.log(req.params.name);
// 	let name = req.params.name;

//   res.status(210).send({
//   	hello:'hello',
//   	bye:'bye',
//   	name:name
//   });
//   // res.send(205);
// });
// app.post('/setName', function(req,res){
// 	let body = req.body;
// 	console.log('body is', body);
// 	res.send({
// 		hello:'got the body',
// 		body:body
// 	});
// });
// // app.configure(function(){
// //     app.use(express.bodyParser());
// // });
// app.listen(8888);
// console.log('Listening on port 3001...');