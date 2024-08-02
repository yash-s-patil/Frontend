const ztmMonsters = [
	{id: 1, monster: 'Mr. Mouse', level: 1},
	{id: 2, monster: 'Mac', level: 30},
	{id: 3, monster: 'Denodude', level: 17},
	{id: 4, monster: 'Pye', level: 5},
];

// find all the monster that are level 15 and higher, but pick the last of that list - before

const advancedMonsters = ztmMonsters.filter(item => item.level > 15);
console.log(advancedMonsters);
// 0: {id: 2, monster: 'Mac', level: 30}
// 1: {id: 3, monster: 'Denodude', level: 17}

console.log(advancedMonsters[advancedMonsters.length - 1]);
// {id: 3, monster: 'Denodude', level: 17

// after using -> findLast()

const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster);

// {id: 3, monster: 'Denodude', level: 17}

// findLastIndex()

const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
// 2

// toReversed vs reverse
// toReversed doesn't change the original array, reverse does change the original array.

const name = ['yash', 'bharat', 'pravin', 'hritik'];

const reversedName = name.toReversed();
console.log(reversedName);
// ['hritik', 'pravin', 'bharat', 'yash']

console.log(name);
// ['yash', 'bharat', 'pravin', 'hritik']

const newname = name.reverse();
console.log(newname);
// ['hritik', 'pravin', 'bharat', 'yash']

console.log(name);
// ['hritik', 'pravin', 'bharat', 'yash']

// similar with toSorted() and sort() ; toSpliced() and splice()

// with() -> at index 1 change the Mac with Ghost

const ztmMonstersList = ['Denodude', 'Mac'];
const newMonster = ztmMonstersList.with(1, 'Ghost');
console.log(newMonster);
// ['Denodude', 'Ghost']

console.log(ztmMonstersList);
// ['Denodude', 'Mac']