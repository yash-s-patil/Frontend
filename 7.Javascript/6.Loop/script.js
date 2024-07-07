//---- for loop --------
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for (var i=0; i < todos.length; i++) {
	todos[i] = todos[i] + "!";
}

console.log(todos);

//pop all elements.
var languages = [
	"English",
	"Hindi",
	"Marathi"
];

console.log(languages);

var languagesLength = languages.length;
for (var i=0; i < languagesLength; i++) {
	languages.pop();
}

console.log(languages);

// while loop
var counterone = 0;
while (counterone < 10 ){
	console.log(counterone);
	counterone++;
}

// do while loop
var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while(counterTwo > 0 )

// forEach (New in ECMAScript 5) -> Both Print same

var companies = ["Google", "Apple", "Amazon", "Meta"];

var companiesLength = companies.length;
for (var i=0; i < companiesLength; i++) {
	console.log(companies[i], i);
}

companies.forEach(function(company, i){
	console.log(company, i);
})