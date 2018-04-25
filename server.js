// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Configuration
var app = express();

// PORT
var PORT = process.env.PORT || 8000;

// Bodyparser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listen
app.listen(PORT, function () {
	console.log("Listening on PORT: " + PORT);
});