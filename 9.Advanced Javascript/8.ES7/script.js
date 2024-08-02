// whether element is included in array or not

const pets = ['cat', 'dog', 'fish'];

pets.includes('parrot');
// false

pets.includes('dog');
// true

'hellooo'.includes('o');
//true

// exponential

const square = (x) => x**2;
const cube = (y) => y**3;

square(2);
//4
square(3);
//9

cube(2);
//8
cube(3);
//27

//exercise

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John');
// false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John'));
// ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result.

power100(10000);
// infinity - any no above 10^308 is represented as infinity
