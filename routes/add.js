var data = require("../data.json");

exports.addExpense = function(request, response) {    
	// Your code goes here
	var date = request.query.date;
	var name = request.query.name;
	var category = request.query.category;
	var price = request.query.price;

	console.log("name:" + name);

	response.render('listOfSpending', data);

	var newEntry = {"date": date, "name": name, "category": category, "price": price};

	data.purchase.push(newEntry);
 }