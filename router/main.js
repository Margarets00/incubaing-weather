
module.exports = function (app, request) {
    app.get('/', (req, res) => {
        res.render('index');
    });
}

