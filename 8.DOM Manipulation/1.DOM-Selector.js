document.getElementsByTagName("h1");
document.getElementsByClassName("second");
document.getElementById("first");
//to access element
document.getElementsByClassName("second")[0];

document.querySelector("h1");
document.querySelector("li"); // - selects the first item it finds
document.querySelectorAll("li"); // gets all li elements
document.querySelectorAll("li, h1");

document.querySelector("li").getAttribute("random");
//"23"
document.querySelector("li").setAttribute("random", "1000");
document.querySelector("li");
// <li random="1000">Notebook</li>

//add a new css class to html element
var h1 = document.querySelector("h1");
h1.className = "coolTitle";

//get list of classes
document.querySelector("li").classList;
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");
document.querySelector("li").classList.add("done");

document.querySelector("li").classList.toggle("done");
// false
document.querySelector("li").classList.toggle("done");
// true

document.querySelector("h1");
// <h1>Shopping List</h1>
document.querySelector("h1").innerHTML = "<strong>Hello</strong>"
document.querySelector("h1");
// <h1><strong>Hello</strong></h1>

document.querySelectorAll("li")[1];
// <li>Jello</li>
document.querySelectorAll("li")[1].parentElement;
// <ul></ul>
document.querySelectorAll("li")[1].parentElement.parentElement;
// <body></body>
document.querySelectorAll("li")[1].parentElement.parentElement.children;
// [h1, p#first, p.second, ul]

// It is imp to cache the selectors in variables
var h1 = document.querySelector("h1");


