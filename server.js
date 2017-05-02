// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/public'));
// Start the app by listening on the default
// Heroku port
var port = process.env.PORT || 8080;
const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
// set the home page route
app.get('/', function(req, res) {

    // make sure index is in the right directory. In this case /app/index.html
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});