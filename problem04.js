// add all the numbers of an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let add = 0;

for (let n = 0; n < numbers.length; n++) {
  sum += numbers[n];
}
console.log(sum);

// alternate way
numbers.map((value) => {
  add += value;
});
console.log(add);
