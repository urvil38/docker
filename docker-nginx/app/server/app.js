var express = require('express');
var logger = require('morgan');
var os = require('os');
var app = express();


app.use(logger('common'));

var hostname = os.hostname();
var arch = os.arch();
var ostype = os.type();
var cpus = os.cpus();
var networkinfo = os.networkInterfaces();
var uptime = Math.floor(os.uptime()/60);
var memory = (os.totalmem()/Math.pow(10,9)).toFixed(2);

app.get('/', (req, res) => {
	res.json({
		'os': hostname,
		'memory': memory+ ' ' +'GB',
		'free memory': (os.freemem()/Math.pow(10,9)).toFixed(2) + ' ' + 'GB',
		'uptime': uptime + ' ' + 'minutes',
		'architecture' : ostype + ' ' + arch,
		'cpus' : cpus,
		'network' : networkinfo
	});
})

app.listen(9000);
