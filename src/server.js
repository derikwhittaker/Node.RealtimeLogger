
var express = require('express');
var socketIo = require('socket.io');
var app = express();

var port = process.env.port || 1337;
var controllers = require('./controllers');
var configuration = require('./configuration');


var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});

var io = socketIo.listen(server);

configuration({
    app: app,
    express: express,
    baseDir: __dirname
});

controllers(app, io);




