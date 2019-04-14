
var express = require('express');  
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server); 

process.chdir(__dirname)

app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res, next) {  
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(client) { 
	
	client.on('connected', (data) => {
		console.log( data.message + ' Client connected...');
    });
    
    client.on('motor', (data) => {
        console.log(data);
        io.emit('motor', data); 
    });

    client.on('music', (data) => {
        console.log(data);
        io.emit('music', data); 
    });
	
});
var i=0;


server.listen(9090); 