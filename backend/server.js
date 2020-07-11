var http = require("http");
var logger = require('morgan');
var express = require('express');

var port = 8000;

var indexRouter = require('./routes/index')
var songsRouter = require('./routes/songs');
var lyricsRouter = require('./routes/lyrics');

var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Middlewares
app.use('/api/songs', songsRouter);
app.use('/api/lyrics', lyricsRouter);
app.use('*', indexRouter); // Default route - 404 Not Found

var server = http.createServer(app);

server.listen(port, () => {
	console.log('Server listening on port ' + port);
});