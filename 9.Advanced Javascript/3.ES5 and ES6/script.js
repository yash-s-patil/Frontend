// let and const - new way of declaring variable

// whenever let is inside {.....} (curly brackets) a new scope is created.
const player = "bobby";
let experience = 100;
let wizardlevel = false;

if (experience > 90) {
	let wizardlevel = true;
	console.log("inside", wizardlevel);  // inside true
}

console.log("outside", wizardlevel); // outside false

// const - cannot change the value of variable once declared.
let city = "pune";
city = "mumbai";
console.log(city);
//mumbai

const country = "india";
country = "japan";
console.log(country);  
// not allowed - error

// but const object properties can change
const obj = {
	player1: "Josh",
	experience1: 22,
	wizardlevel1: false
}

obj = 5;
//not allowed - error

obj.wizardlevel1 = true;
console.log(wizardlevel1);
// true;

/* ------------------------------------------------------------------------------------- */

// Destructuring
const obj2 = {
	player2: "Josh",
	experience2: 22,
	wizardlevel2: false
}

// old way
const player2 = obj2.player2;
const experience2 = obj2.experience2;
const wizardlevel2 = obj2.wizardlevel2;

// new way
const { player2, experience2 } = obj2;
let { wizardlevel2 } = obj2;
console.log(player2,experience2,wizardlevel2);

/* ------------------------------------------------------------------------------------ */

// new way of declaring object properties

const name = 'john snow';

const obj = {
	[name]: 'hello',
	[1+2]: 'hihi'
}

// when properties match with value
const a ='simon';
const b = true
const c = {};

const obj = {
	a,
	b,
	c
}


/* ------------------------------------------------------------------------------------ */
// template strings

const name = "Sally";
const age = 34;
const pet = "dog";

//before
const greeting1 = "Hello " + name + " you seem to be " + age + ". What a lovely " + pet + " you have";
console.log(greeting1);

//after
const greeting2 = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
console.log(greeting2);

/* ------------------------------------------------------------------------------------- */

// default arguments

function greet(name='', age=30, pet='cat') {
	console.log(`Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`);
}

greet();
// Hello  you seem to be 20. What a lovely cat you have

greet('John', 45, 'monkey') //override default arguments
// Hello John you seem to be 35. What a lovely monkey you have

greet('Yash')
// Hello Yash you seem to be 20. What a lovely cat you have


/* ------------------------------------------------------------------------------------- */

// arrow functions

//before
function add(a, b) {
	return a + b;
}

//after
const add2 = (a, b) => a + b;

add(4,5);
add2(4,5);


// Assignment

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// ans
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// ans

const person = {
	firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// ans
const a = 'test';
const b = true;
const c = 789;

const okObj = {a,b,c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//ans
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// ans
function isValidAge(age=10) {
	return age;
}
const isValidAge = (age = 10) => age;

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// ans

const whereAmI = (username, location) => {
	if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}