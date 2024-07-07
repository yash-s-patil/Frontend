var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false
}

console.log(user);
console.log(user.name); // John
console.log(user.isMarried); //false

// add new property
user.favouriteFood = "Spinach";
console.log(user);

// change the existing property
user.isMarried = true;
console.log(user);

// array inside object

var user2 = {
	name: "Nick",
	age: 24,
	hobby: "Soccer",
	isMarried: false,
	subjects: ["Science", "Maths", "English"]
}

console.log(user2);
console.log(user2.subjects[1]);

// list of objects
var users = [
	{
		username: "andy",
		password: "secret"
	},
	{
		username: "kevin",
		password: "123abc"
	}
]

console.log(users);
console.log(users[0]);
console.log(users[1].password);

//function inside object - called method

var user3 = {
	name: "Yash",
	age: 23,
	hobby: "Soccer",
	isMarried: false,
	subjects: ["Science", "Maths", "English"],
	sayHi: function() {
		console.log("Hellooo i am yash");
	}
}

user3.sayHi();

// empty and null
// empty
var emptyObj = {}

//null
var nullObj = null;

console.log(emptyObj);
//undefined

console.log(nullObj);
// null

nullObj.name = "Andy" 
//error - cannot set property 'name' of null.

emptyObj.name = "Andy"
// "Andy"

// Exercise
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
{
	username: "yash",
	password: "password"
}

// 2. Create an array which contains the object you have made above and name the array "database"
var database = [
 	{
 		username: "yash",
		password: "password"
 	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{ 	username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

