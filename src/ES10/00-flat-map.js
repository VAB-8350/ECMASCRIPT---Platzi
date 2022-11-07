//flat
const array = [1, 3, 4, 5, 6, 2, 4, [1, 2, 3, [2, 45, 1]], 23, 6, [1, 5]]
console.log(array.flat(2))

//flatmap
const array2 = [1,2,3,4]
console.log(array2.flatMap(v => [v, v * 2]))