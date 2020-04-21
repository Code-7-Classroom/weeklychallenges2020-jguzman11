var numArray = [1,99,2,3,4];
//func.apply(thisArg, [ argsArray])
const max = Math.max.apply(null, numArray);

console.log(max);








// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }