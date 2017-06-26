// Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require('./models/article.js');

// Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an intial port.

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static("/public"));

// MongoDB Configuration (match to mlab url)
// MONGODB_URI: mongodb://heroku_bpxfbv4h:5jimlb2drm25pipmtaub2hdmnl@ds135669.mlab.com:35669/heroku_bpxfbv4h
mongoose.connect('MONGODB_URI: mongodb://heroku_bpxfbv4h:5jimlb2drm25pipmtaub2hdmnl@ds135669.mlab.com:35669/heroku_bpxfbv4h');
var db = mongoose.connection;

db.on('error', function() {
	console.log('Mongoose error', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// Load HTML page (with ReactJS) in public/index.html
app.get('/', function(req, res) {
	res.sendFile('./public/index.html');
});

// Call this route the moment the page gets rendered
// Components use this link to query MongoDB for all saved articles
app.get('/api/savedArticle', function(req, res) {
	console.log("Score!");

	// Find all the records, sort it in descending order for publish date
	Article.find{}.sort([['date', 'descending']]).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);
		}
	})
});

// Components use this 'post' to save an article to the database
app.post('/api/savedArticle', function(req, res) {
	var newSaved = new Article(req.body);

	// Save article based on JSON input
	// Use Data.now() to always get the current date & time
	Article.create({'title': req.body.title, "date": req.body.date, "url": req.body.url}, function(err) {
		if (err) {
			console.log(err);
		}
		else {
			res.send("Saved Article");
		}
	})
});

// Components will use this app.delete to remove an article from the database
app.delete('/api/savedArticle/:id', function(req, res) {
	Article.find({_id: req.params.id}).remove().exec(function(err) {
		if (err) {
		console.log(err);
		}
		else {
			res.send('Removed Article');
		}
	})
});

// --------------------------

// Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
