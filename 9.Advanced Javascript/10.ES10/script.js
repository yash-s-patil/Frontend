// flat - remove nested array

const array = [1, [2,3], [4,5] ];
array.flat();
// [1, 2, 3, 4, 5]

const array2 = [1, 2, [3, 4, [5] ] ];
array2.flat();
// [1, 2, 3, 4, [5]] -> only flatend one layer(by default 1), but we can also specify how many layer we want to flat array.

const array3 = [1, 2, [3, 4, [5] ] ];
array3.flat(2); // -> flaten at layer 2
// [1, 2, 3, 4, 5]

const entries  = ['bob', 'sally',,,,,,'cindy']
// flat the entries and clean the data
entries.flat();
// ['bob', 'sally', 'cindy']

// trim - remove blank spaces
const userEmail = '            abcxyz@gmail.com';
const userEmail2 = 'aabb@gmail.com          ';

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//abcxyz@gmail.com
//aabb@gmail.com

// fromEntries -> transforms a array of key value pair into objects

userProfiles = [['justin', 20], ['kevin', 11], ['ray', 32]];
const objectUserProfiles = Object.fromEntries(userProfiles);
console.log(objectUserProfiles);
// {justin: 20, kevin: 11, ray: 32}

// try and catch block

try {
	bob + 'hi';
} catch {
	console.log('you made an error');
}

// assignment

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const newarray = array.flat(2);
console.log(newarray);
// [1,2,3,[4],[5]]

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')));
// ['Hello young grasshopper!', 'you are', 'learning fast!']

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flatMap(x => x.join(' ')).join(' '));
// Hello young grasshopper! you are learning fast!


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));
// [3]


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

console.log(userEmail3.trim());
console.log(userEmail3.trimEnd().trimStart())

//cannotfillemailformcorrectly@gmail.com 

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)
console.log(usersArray);

// [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
updatedUsersArray = usersArray.map(user => [user[0], user[1]*2]);
console.log(updatedUsersArray);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedusers = Object.fromEntries(updatedUsersArray);
console.log(updatedusers);
// {user1: 36546, user2: 185666, user3: 180630}