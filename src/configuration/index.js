function init(options) {

    var isDebug = (process.env.port !== undefined);

    options.app.configure(function () {
        options.app.use(options.express.bodyParser());

        options.app.set('views', options.baseDir + '/app');
        options.app.engine('html', require('ejs').renderFile);

        options.app.use('/css', options.express.static(options.baseDir + '/app/css'));
        options.app.use('/app', options.express.static(options.baseDir + '/app'));
        options.app.use('/js', options.express.static(options.baseDir + '/app/js'));
        options.app.use('/ctrl', options.express.static(options.baseDir + '/app/controllers'));

        options.app.use('/src', options.express.static(options.baseDir + '/bower_components'));

    });
    
    // add the the global app so we can check it later
    options.app.isDebug = isDebug;
}

module.exports = init;