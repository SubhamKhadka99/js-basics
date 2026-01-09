//
const numbers = [23, 45, 3, 4, 5, 67];

//! forEach method (used for looping)
//arr.forEach(callback)
// for each doesn't return any value even when return is added on the callback function
const callback = (value, index, array) => {
  console.log("for each callback", value, index, array);
};
// numbers.forEach(callback);

// res = numbers.forEach(callback);
// console.log(res)

// const res = numbers.forEach((value,i,arr)=>{
//     console.log('for each callback' ,value,i,arr)
// })

//! transformation
//* map
//? arr.map(callback)

const double = numbers.map((value, i, arr) => {
  return value * 2;
});

console.log(double);
console.log(numbers);

//* filter
//? arr.filter(callback)

// const odd_numbers = numbers.filter((value)=>{
//     if (value % 2 !==0){
//         return true;
//     }
// })

//* const odd_numbers = numbers.filter (value => value % 2 !==0 );
//* console.log(odd_numbers)

//number greater then 10

const greater_than_10 = numbers.filter((value) => value > 10);
console.log(greater_than_10);

//! reduce
//* arr.reduce(callback,initial value);
//acc = accumulator
const sum = numbers.reduce((acc, value) => {
  return (acc = acc + value);
}, 0);
console.log(sum);

//* does the same but adds from right
const right = numbers.reduceRight((acc, value) => {
  return (acc = acc + value);
}, 0);

console.log(right);

//! searching
//* findIndex
// arr.findIndex()

//checks the index of first value less than 5
const less_than_5 = numbers.findIndex((value) => value < 5);
console.log(less_than_5);

//for last index
const less_than_five = numbers.findLastIndex((value) => value < 5);
console.log(less_than_five);

//* find
// gives the value instead of index
const less_Than_five = numbers.find((value) => value < 5);
console.log(less_Than_five);
//last
const greater_100 = numbers.findLastIndex((value) => value > 100); // if the index doesn't exist value is -1
console.log(greater_100);

// reverse
//* arr.reverse()

// console.log(numbers.reverse())

//* splice
// arr.splice()

// delete , returns the values that are removed
res = numbers.splice(1, 2);
console.log(numbers, res);

// to add
add = numbers.splice(1, 0, 22, 33, 44);
console.log(numbers);

//! sort

// const users = ['ram','sita','hari']
// users.sort()
// console.log(users)

// numbers.sort()
// console.log(numbers)

numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);
