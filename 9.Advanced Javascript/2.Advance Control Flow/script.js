// ternary operator
// condition ? expr1 : expr2;

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

// switch
function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "you encountered a monster";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;
		case "right":
			whatHappens = "you found a river";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}

var output = moveCommand("forward");
console.log(output);