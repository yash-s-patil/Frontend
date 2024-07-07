//Array - storing elements at contagious memory location.

var list = ["Tiger", "Cat", "Bear", "Lion"];
console.log(list[0]);

var numbers = [1,2,3,4];

var booleans = [true, false, true];

var functionList = [function apple(){
	console.log("apple");
}, function banana(){
	console.log("banana");
}]

//not adviced
var mixedList = ["apples", 3, undefined, true, function apple(){console.log(apple);}]

var listOfArray = [
	["Dog", "Cat", "Monkey", "Bear"],
	["BMW", "Mercedes", "Aston Martin", "Audi"]
];

console.log(listOfArray[0][2]);
console.log(listOfArray[1][1]);

// array inbuilt methods
var list1 = ["Tiger", "Dog", "Crocodile", "Snake"];

// remove the first element and shift all the elements to left
list1.shift();
console.log(list1);
//['Dog', 'Crocodile', 'Snake']

//remove the last elements
list1.pop(); 
console.log(list1);
// ['Dog', 'Crocodile']

// add element at last
list1.push("Elephant");
console.log(list1);
// ['Dog', 'Crocodile', 'Elephant']

// concat list
list1 = list1.concat(["Bee", "Deer"]);
console.log(list1);
// ['Dog', 'Crocodile', 'Elephant', 'Bee', 'Deer']

//sort list
list1.sort();
console.log(list1);
// ['Bee', 'Crocodile', 'Deer', 'Dog', 'Elephant']


//Assignment
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();
console.log(array);

// 2. Sort the array in order.
array.sort();
console.log(array);

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array. - New concept

// concept - array.splice( index, remove_count, item_list )
/* 
index: It is a required parameter. This parameter is the index from which the modification of the array starts (with the origin at 0). This can be negative also, which begins after many elements counting from the end.
remove_count: The number of elements to be removed from the starting index.
items_list: The list of new items separated by a comma operator that is to be inserted from the starting index.
*/

array.splice(0, 1);
// from 0th index remove one element, and no elements to add.
console.log(array);

// 5. Reverse the array
array.reverse();
console.log(array);

//6. using this array, 
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);