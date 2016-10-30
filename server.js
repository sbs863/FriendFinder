//server setup
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set server @ environmental port or port 1111
var app = express();
var PORT = process.env.PORT || 1111;

//allow for static file use (ex. css and javascript files dependancies for html)
app.use(express.static('app/'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

//route links
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);


//Launch server
app.listen(PORT, function() {
    console.log('Server online, listening on PORT: ' + PORT);
});
