var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var MyFirstAngularApp = express();

MyFirstAngularApp.use(bodyParser.json());
MyFirstAngularApp.use(bodyParser.urlencoded({
	extended: true
}))

MyFirstAngularApp.use(cors());

var Books = [
	{
		name :"angularjs"
	},
	{
		name :"reactjs"
	},
	{
		name :"emberjs"
	},
];

MyFirstAngularApp.get("/books", function(req, res){
	res.send(Books);
});

MyFirstAngularApp.post("/books", function(req, res){
	Books.push({
		name: req.body.name
	});
	res.send(200);
});


var server = MyFirstAngularApp.listen(3001, function(){
	console.log("backend started");
});