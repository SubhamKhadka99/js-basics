//! Functions

// function function_name () {
//     //body
// }
// function greet (){
//     console.log('Hello World')
// }
// greet()

//! function with input

//?argument while trying to get output it is argument
//?Parameter while defining function the value it gets

// function add(A , B) {
//     console.log(A+B)
// }

// add(2,4)
// add(10,20)
// add(20,1)

//! function with return-type
// function add(A , B) {
//     let sum = A+B
//     return sum (or return a+b)
// }

// const result = add(10,20)
// console.log('result',result)
// console.log(add(4,5))
// console.log(add(22,10))

//! Function with default parameter

// function add(A=0 , B=0) {
//     let sum = A+B
//     return sum
// }

// console.log(add(12))
// console.log(add())

function greet(user = "guest") {
  let s = "Hello " + user;
  return s;
}

console.log(greet());
console.log(greet("Ram"));

//! Function declaration  / named function

function diff(a, b) {
  return a - b;
}

//! function expression /anonymous function defining function inside variable

// const multiply = function (a = 1, b = 1) {
//   return a * b;
// };
// console.log(multiply(2));
// console.log(multiply(10));

// user age
function vote(age) {
  if (age >= 18) {
    console.log("Eligible for voting");
  } else {
    console.log("Ineligible for voting");
  }
}
vote(20);
vote(10);

// const div = function(a,b){
//     return a/b;
// }

// console.log(div(10,2))

//! arrow function uses => in the function removes function keyword
// const div=(a,b) => {
//     const res = a/b
//     return res
// }

//? this is the same function as above
const div = (a, b) => a / b;
console.log(div(10, 2));

//check even

// const isEven=(a) => {
//     if(a%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(10))

//same function in smaller form
const isEven = (num) => num % 2 === 0;

console.log(isEven(3));

//if function only has 1 parameter then we can remove ()
const Even = (num) => num % 2 === 0;
console.log(Even(10));

//! callback function

const parent = (input) => {
  console.log("parent function");
  console.log(input);
  input(100); // you can pass the callback function's parameter like this
};

//children is a callback function as it is being passed as argument
const children = (a) => {
  console.log("children function", a);
};
//while passing callback function we are passing function's reference that is why we don't use ()
parent(children);

//! anonymous function

parent((a) => {
  console.log("anonymous function", a);
});

//! HOF -> Higher Order Function (takes function as input or returns function as output)

//1 . Takes function as argument
//2 . Returns functions as output
//3.  or both 1 and 2

const hof = () => {
  console.log("Outer function");

  const func = (b) => {
    console.log("Inner function", b);
  };

  return func;
};
//Inner function is called outside the body of the function using a new variable
const Inner = hof();
Inner(12);

//Example 3

const hello = (input) => {
  console.log("Hello!");
  input();
  const funct = (a) => {
    console.log("World");
  };
  return funct;
};

const hel = () => {
  console.log("Name");
};

const h1 = hello(hel);
h1();

// const multiply = (factor) =>{
//   return (num) =>{
//     let result = num * factor
//     return result
//   }
// }
//! function factory
const multiply = factor => num => num*factor;

//multiply by 5
const multiply_by_5 = multiply(5)
console.log(multiply_by_5(10))

