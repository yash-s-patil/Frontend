// pass by value

var a = 5;
var b = a;

b++;

console.log(a);
// 5
console.log(b);
// 6

// pass by refrence

let obj1 = {
	name: 'Yao',
	password: '123'
};

let obj2 = obj1;

obj2.password = "abc";

console.log(obj1);
// {name: 'Yao', password: 'abc'}

console.log(obj2);
// {name: 'Yao', password: 'abc'}

// array is also object

var c = [1,2,3,4,5];
var d = c;

d.push(888);

console.log(c);
// [1, 2, 3, 4, 5, 888]
console.log(d);
// [1, 2, 3, 4, 5, 888]

// sometimes we dont want to change the original array

var c = [1,2,3,4,5];
var d = [].concat(c);

d.push(888);

console.log(c)
// [1, 2, 3, 4, 5]
console.log(d);
// [1, 2, 3, 4, 5, 888]

// sometimes i dont want to change the original object
let obj = {a: 'a', b: 'b', c: 'c'};

let clone = Object.assign({}, obj);

let clone2 = {...obj};

obj.c = 5;

console.log(obj);
{a: 'a', b: 'b', c: 5}
console.log(clone);
{a: 'a', b: 'b', c: 'c'}
console.log(clone2);
{a: 'a', b: 'b', c: 'c'}


// shallow cloning
let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};

// deep cloning
let superclone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
console.log(obj);
// {a: 'a', b: 'b', c: {deep: 'hahaha'} }
console.log(clone);
// {a: 'a', b: 'b', c: {deep: 'hahaha'} }
console.log(clone2);
// {a: 'a', b: 'b', c: {deep: 'hahaha'} }

// deep cloning
console.log(superclone);
// {a: 'a', b: 'b', c: {deep: 'try and copy me'} }