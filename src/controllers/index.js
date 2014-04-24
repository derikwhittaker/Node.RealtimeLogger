
function init(app, io) {

    require('./views').init(app);
    require('./logs').init(app, io);
    require('./connections').init(io);

}


module.exports = init;
