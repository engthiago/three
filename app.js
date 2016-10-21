var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);