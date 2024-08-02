// ES2020

Number.MAX_SAFE_INTEGER;
// 9007199254740991

// to handle number greater than above we use BigInt

typeof 5n;
// 'bigint'

9007199254740991n + 10n;
// 9007199254741001n

// optional chaining operator

let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6
	}
}

let andrei_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 0
	}
}

// check whether andrei_pokemon has pikachu property - before

if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
	let weight2 = andrei_pokemon.pikachu.weight;
	console.log(weight2);
} else {
	let weight2 = undefined;
	console.log(weight2);
}

// check whether andrei_pokemon has pikachu property - after using optional chaining operator

let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);
// undefined - does the same above thing.

// Nullish Coalescing operator
// it will give no power only when undefined or null
let power = andrei_pokemon?.raichu?.power ?? 'no power'; 
console.log(power);
// 0


// assignment

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
// BigInts need to be calculated with other BigInts so...
3n + 4n + 1n // 8n
3 + 4 + 1 // 8
// Both produce the value of 8, but one is a Number type, the other is a BigInt type


// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

// answer
if(andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
	console.log('fight!');
} else {
	console.log('walk away...');
}

// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') // false
console.log(null ?? 'hellooo') // hellooo
console.log(null || 'hellooo') // hellooo
console.log((false || null) ?? 'hellooo')  // hello
console.log(null ?? (false || 'hellooo')) // hello

