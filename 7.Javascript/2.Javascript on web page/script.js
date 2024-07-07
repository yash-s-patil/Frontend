4 + 3;

if (4 + 3 === 7){
	console.log("Hi There")
}

// function

//function declaration
function sayHello() {
	console.log("Hello");
}

sayHello();

//function expression - anonymous function
var sayBye = function() {
	console.log("Bye");
}

sayBye();

// function with argument
function multiply (a, b) {
	return a * b;
}

alert(multiply(7, 4));

//Assignment
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge();

var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge2();