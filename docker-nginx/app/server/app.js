var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('common'));

app.get('/',(req,res) => {
	res.send('Send from express');
})

app.listen(9000);