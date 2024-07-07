// Javascript Data Type

// 1. Number

2 + 3
// -> 5
12 % 3
// -> 0 
(3 * 4 ) + 2
// -> 14

// 2. Strings

"Hello"
// -> 'Hello'

'Javascript'
// -> 'Javascript'

"Hello " + "There!"
// -> 'Hello There!'

'This isn\'t very nice'
// -> "This isn't very nice"

10 + "34"
// -> '1034'

10 - "3"
// -> 7

"hello" - "bye"
// -> NaN

// 3. Boolean

3 > 2
// -> true

4 < 2
// -> false

4 === 4
// -> true

3 !== 3
// -> false


// Variables
var firstName = "Yash"
firstName
// -> 'Yash'

// Simple addition calculator using variable concept
var first = prompt("enter first number: ");
var second = prompt("enter second number: ");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);

//Reassign variable
var a = "Hello";
a
// -> Hello
a = "Hi";
a
// -> Hi

//Undefined
var b;

// Conditions
var name = "Billy";
if (name === "Billy") {
	alert("Hi Billy");
} else {
	alert("I dont know you!");
}

var name = "Susy";
if (name === "Billy") {
	alert("Hi Billy");
} else if (name === "Susy") {
	alert("Hi Susy");
} else {
	alert("I dont know you")
}

// logical operators
// && || !
var firstName = "Yash"
var lastName = "Patil"
if (firstName === "Yash" && lastName === "Patil") {
	alert("Hi Yash Patil");
} else {
	alert("I dont know you");
}

// Assignment
var age = prompt("Enter your age: ");
if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18 ) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}