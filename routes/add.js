var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	console.log("name:" + name);

	response.render('index', data);

	data.friends.push(name,description);
 }