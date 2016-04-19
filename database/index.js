// Load dependencies
const express      = require('express');
const mongoose     = require('mongoose');
const bodyParser   = require('body-parser');

// Load configs
const configDb     = require('./config/db');
const configServer = require('./config/server');

// Init express instance
const app          = express();
// Express middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Connect mongoose to Database
mongoose.connect(configDb.connectionUrl);

// Routes
require('./api/session/session.routes')(app);

// Listen to port
const server = app.listen(configServer.port, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server running at PORT ' + port);
});
