// closures - child scope always have access to the parent scope (not vice versa)
// here in our example greet is been declared in first fun but accessed in second fun, because second func is a child of first func

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// currying - converting a function taking multiple arguments, into a function that takes them one at a time

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
// (b) => a * b;
curriedMultiply(3)(4);
// 12

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(4);
//20
multiplyBy5(7);
//35

// Compose - act of putting two functions together to form a third function, where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (sum) => sum + 1;
compose(sum, sum)(5);
// 7

//assignment

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) 
// returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) 
// 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) 
// 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) 
// 16
