const arr1 = [2220, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];


const mainArr = arr1.concat(arr2,arr3);
console.log(mainArr);

const min = Math.min.apply(null, mainArr);
console.log(min);

const max = Math.max.apply(null, mainArr);
console.log(max);