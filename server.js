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
app.use(express.static(__dirname + "/public"));

// Run Morgan for Logging
