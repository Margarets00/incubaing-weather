const express = require('express');
const app = express();
const request = require('request');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server is running at 3000`);
});

var router = require('./router/main')(app, request);
