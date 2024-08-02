// at()

const arr = [100, 200, 400, 50000, 10];

console.log(arr[arr.length - 2]);
// 50000

console.log(arr.at(-2));
// 50000

console.log(arr.at(1));
// 200