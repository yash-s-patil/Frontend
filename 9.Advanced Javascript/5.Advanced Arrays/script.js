// advanced arrays

const array = [1, 2, 10, 16];
const double = [];

array.forEach((num) => {
	double.push(num * 2);
});

console.log(double);

/* 
forEach: This iterates over a list and applies some operation with side effects to each list member 
(example: saving every list item to the database) and does not return anything. 
*/

/*
map: This iterates over a list, transforms each member of that list, and returns another list of the 
same size with the transformed members (example: transforming list of strings to uppercase). 
It does not mutate the array on which it is called.
*/

// map
const mapArray = array.map((num) => {
	return num * 2;
});
console.log(mapArray);

//make it more readble
// const mapArray = array.map(num => num * 2);

// filter

const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);

console.log('reduce', reduceArray);

// assignment

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
});

console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(user => {
	let { username } = user;
	username = username + "?";
	return username;
});

console.log(mapArray);

//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => {
	return user.team === "red";
});

console.log(filterArray);

//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumulator, user) => {
	return accumulator + user.score;
}, 0);

console.log(reduceArray);

//create a new list with all user information, but add "!" to the end of each items they own.

const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);
