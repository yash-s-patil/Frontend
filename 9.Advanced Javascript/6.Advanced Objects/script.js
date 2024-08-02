// reference type

var object1 = { value: 10 };

var object2 = object1;

var object3 = { value: 10 };

object1 === object2;
// true

object1 === object3;
// false

object1.value = 15;

object2.value
// 15

object3.value
// 10

// context
// this - this refers to what object we are in

console.log(this);
// window object
console.log(this === window);
// true
this.alert("hello");

function a() {
	console.log(this);
}

a();
// window object

const object4 = {
    a: function() {
        console.log(this);
    }
};

object4.a();
// {a: f}

// instantiation - making multiple copies of objects
// class is a blue print, using class we can create multiple objects
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play () {
        console.log(`Weeeeeee I'm a ${this.type}`);
    }
}


const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
// Weeeeeee I'm a Healer

wizard1.introduce();
// Hi I am Shelly, I'm a Healer