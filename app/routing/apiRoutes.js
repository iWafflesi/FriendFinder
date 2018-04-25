// Dependencies
var path = require("path");

// Load Data
var friendData = require("../data/friends");

// Routing
module.exports = function (app) {
	// API GET Requests
	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	// API POST Requests
	app.post('/api/friends', function (req, res) {

		//convert user scores to integer
		var userScore = req.body.scores.map(function (i) {
			return parseInt(i);
		});

		var scoreArray = [];
		//iterate through the friendData array
		for (var i = 0; i < friendData.length; i++) {
			var scoreDifference = 0;
			//iterate through the userScore array 
			for (var j = 0; j < userScore.length; j++) {
				//add up the differences between userScore and friendData[i]
				scoreDifference += Math.abs(parseInt(friendData[i].scores[j]) - (userScore[j]));
			}
			//push difference into array
			scoreArray.push(scoreDifference);
		}
		var smallestIndex = 0;

		//iterate through the scoreArray to find the index of the smallest integer
		for (var i = 0; i < scoreArray.length; i++) {
			if (scoreArray[i] <= scoreArray[smallestIndex]) {
				smallestIndex = i;
			}
		}

		var bestMatch = friendData[smallestIndex];

		//push new userData into friendData
		friendData.push(req.body);

		res.json(bestMatch);

	});
}
