(function (viewsController) {


    viewsController.init = function (app) {

        app.get("/", function (req, response) {
            response.render('index.html');
        });

    };


})(module.exports);