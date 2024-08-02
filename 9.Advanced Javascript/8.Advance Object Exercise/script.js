[2] === [2]
// false -> they do not refer to the same address memory.

const obj1 = { a: 'a' }
const obj2 = { a: 'a' }

obj1 === obj2;
// false

const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

console.log(object1); // 4
console.log(object2); // 4
console.log(object3); // 4
console.log(object4); // 5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal {
	constructor(name,type,color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Mooo I'm ${this.name} and I'm ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');
cow.sound();