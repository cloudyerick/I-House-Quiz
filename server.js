var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('/Users/erickmena/Desktop/Three_JS_Project/web-server/public/index.html');
});


app.listen(3000);