(function (logController) {

    var appPointer;
    var ioPointer;
    var cache = require('../cache').init();
    
    ///*
    //    expected that the post contain a valid body and the format be as follows
    //    {
    //        "id" : "someGUID",
    //        "platform" : "name of platform",
    //        "sessionId" : "sessingGuid",
    //        "body": {
    //                    "severity" : "high", "medium", "low",
    //                    "category" : "",
    //                    "message" : "some message body"
    //                }
    //    } 
    //*/
    var postMessage = function(req, res)
    {
        if (appPointer.isDebug) {
            console.log('Post Message Receieved');
            console.log(req.body);
        }

        var message = req.body;

        var isBodyValid = isValidMessage(message);

        if (isBodyValid) {
            cache.appendToSession(message);
            // put into backing cache

            // broadcast to listeners
            res.send(200);
        } else {
            console.log("[Log Controller] - Bad Formed Message: " + JSON.stringify( req.body));
            res.send(400, { error: 'The log request was badly formed' });
        }

    };

    var isValidMessage = function(message) {
        
        var isValidShell = message !== undefined &&
            message.id !== undefined &&
            message.sessionId !== undefined;

        var body = isValidShell ? message.body : undefined;
        var isValidBody = body !== undefined &&
            body.severity !== undefined &&
            body.category !== undefined &&
            body.message !== undefined ;

        return isValidShell && isValidBody;
    };

    logController.init = function(app, io) {
        appPointer = app;
        ioPointer = io;

        console.log('[Log Controller] Init was called');

        appPointer.post('/log', postMessage);
    };


})(module.exports);

