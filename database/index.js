// Load dependencies
const express = require('express');
const mongoose = require('mongoose');

// Load configs
const configDb = require('./config/db');
const configServer = require('./config/server');

// Init express instance
const app = express();

// Connect mongoose to Database
mongoose.connect(configDb.connectionUrl);

// Listen to port
const server = app.listen(configServer.port, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server running at PORT' + port);
});
