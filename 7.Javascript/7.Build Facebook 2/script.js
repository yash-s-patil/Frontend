var database = [
	{
		username: "yash",
		password: "supersecret"
	},
	{
		username: "justin",
		password: "justin123"
	},
	{
		username: "kevin",
		password: "kevin123"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is soo cool"
	}
];

var userNamePrompt = prompt("What's your username: ");
var passwordPrompt = prompt("What's your password ");

function isUserValid(username, password) {
	for (i = 0; i < database.length; i++){
		if (username === database[i].username && password === database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if(isUserValid(user, pass)){
		console.log(newsfeed);
	} else {
		alert("Sorry wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);