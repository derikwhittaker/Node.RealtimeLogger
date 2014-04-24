(function (connectionsController) {

    
    connectionsController.init = function (io) {
        
        io.sockets.on('connection', function (socket) {
            console.log('New Connection ' + socket.id);
        });

    };


})(module.exports);