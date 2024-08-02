'turtle'.padStart(10);
// '    turtle'  -> 10 total spaces used including the string

'turtle'.padEnd(7);
// 'turtle ' -> 7 total spaces used including the string

const fun = (
	a,
	b,
	c,
	d,
	) => {
	console.log(a);
}

fun(1,2,3,4,)

// before iterate through object

let obj = {
	'username0': 'Santa',
	'username1': 'Rudolf',
	'username2': 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

// after - iterate through the object and can use any array property on object

Object.entries(obj).forEach(value => {
	console.log(value);
})

/*
['username0', 'Santa']
['username1', 'Rudolf']
['username2', 'Mr.Grinch']
*/

// iterate only over values not keys
Object.values(obj).forEach(value => {
	console.log(value);
})

/*
Santa
Rudolf
Mr.Grinch
*/

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})
//['Santa0', 'Rudolf1', 'Mr.Grinch2']

// exercise

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart

turtle = turtle.trim().padEnd(9, "=");
console.log(turtle);

//🐢=======

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'

let result = Object.entries(obj).map(value => value.join(' ')).join(' ');
console.log(result);
// 'my name is Rudolf the raindeer'

