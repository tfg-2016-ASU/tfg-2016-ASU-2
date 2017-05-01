var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var port = (process.env.PORT || 8080);

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));


app.listen(port, ()=>{
	console.log("Server running on port " + port);
});

