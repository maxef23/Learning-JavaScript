var MyFirstAngularApp = angular.module('MyFirstAngularApp', ['ngRoute']);

MyFirstAngularApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		template: '<h1>This my homepage</h1>'
	})
	.when('/posts', {
		template: '<h1>This my posts</h1>'
	})
	.when('/posts/:postId', {
		template: '<h1>This my </h1>',
		controller: "Ctrl"
	})
});

MyFirstAngularApp.controller("Ctrl", function ($scope, $routeParams) {
	console.log($routeParams);
	
});





// MyFirstAngularApp.run( function($httpBackend){
// 	var Books = [
// 	{
// 		name :"angularjs"
// 	},
// 	{
// 		name :"reactjs"
// 	},
// 	{
// 		name :"emberjs"
// 	},
// ];

// $httpBackend.whenGET("http://localhost:3001/books").respond(200, Books);

// $httpBackend.whenPOST("http://localhost:3001/books").respond(function (method, url, data){
// 	var result = JSON.parse(data);
// 	Books.push(result);
// 	return [200, result]; 
// });



// });

// MyFirstAngularApp.controller("MainCtrl", function($http, $scope ){
// 	$http.get('http://localhost:3001/books')
// 	.success(function (result) {
// 		// console.log("success", result);
// 		$scope.books = result;
// 	})
// 	.error(function (result){
// 		console.log("error");
// 	})

// 	$scope.addBooks = function (book){
// 			$http.post("http://localhost:3001/books", book)
// 			.success(function (result) {
// 			console.log("success");
// 			$scope.books.push(book);
// 			$scope.book  = null;
// 		})
// 			.error(function (result){
// 			console.log("error in addBooks");
// 		})
// 	}
// });




// MyFirstAngularApp.directive("wrapIn", function($templateCache){
// 	return{
// 		transclude: "element", 
// 		link: function(scope, element, attrs, ctrl, transclude){
// 			var template = $templateCache.get(attrs.wrapIn);
// 			var templateElement = angular.element(template);
// 			transclude(scope, function(clone){
// 				element.after(templateElement.append(clone));
// 			})
// 			console.log("wrapIn")
// 		}
// 	}
// })




// MyFirstAngularApp.controller("MainCtrl", function($scope){
// 	$scope.hello = "hello";
// });

// MyFirstAngularApp.directive("put", function(){
// 	return { 
// 		scope: true, 
// 		template: "{{hello}}",
// 		link: function(scope, element, attrs){
// 			console.log("sdfsfs");
// 			scope.hello = "hi"
// 		}
// 	}
// })




// MyFirstAngularApp.directive('fooBar', function(){
// 	return {
// 		template: "<p> Hello {{name}} </p>",
// 		link: function(scope, element, attrs) {
// 			scope.name = "Sasha";
// 		}
// 	};
// });


// MyFirstAngularApp.run(function(){
// 	console.log("dfsdfsd");
// });

// MyFirstAngularApp.directive('foo', function(){
// 	return {
// 		link: function (scope, element, attrs){
 // 			// console.log(scope);
// 			// console.log(element);
// 			// console.log(attrs);
// 			// element.text("this is my magic directive");
// 			element.on('click', function() {
// 				if (element.text() === "foo"){
// 					element.text("bar");
// 				} else {
// 					element.text("foo");
// 				}
// 			})
// 		}
// 	}
// })

// MyFirstAngularApp.controller('FirstCtrl', function($scope, myFactory) {
// 	console.log('FirstCtrl')
// 	$scope.Factory = myFactory;
// 	$scope.hello = "hello world";

// });

// MyFirstAngularApp.controller('SecondCtrl', function($scope, myFactory) {
// 	console.log('SecondCtrl')
// 	$scope.myFactory = myFactory;
// 	$scope.hello = "hello world";

// });

// MyFirstAngularApp.factory('myFactory', function(){
// 	return {
// 		hello: "world hello"
// 	}
// });


// angular.module('MyFirstAngularApp', []).controller('MyCtrl', function($scope) {
// 	$scope.name = 55;
// 	$scope.myBook = "AngularJS";

// })
