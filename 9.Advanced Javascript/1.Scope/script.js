// scope - what variable i have access to when code is running

function bb() {
	var a = "Hello";
}
bb();
console.log(a);
// error - a is not defined


// function has access to any variable in root scope
var b = "Can i Access this ?";
function bb() {
	var a = "hello";
	console.log(b);
}
bb();
//output - Can i Access this ? 


var c = "can i access this ?";
function cc() {
	c = "hello";
} 
console.log(c);
// can i access this ?
cc();
console.log(c);
// hello


// exercise
//Q-1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
q1();
// output - 3

//Q-2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

q2();
q22();
// output - 5
a;
// output - 5


//Q-3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

q3();
q32();
// output - hello
a;
// output - hello


//Q-4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

q4();
// output - test
a;
// output - 1;

//Q-5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//output -5
// output -5