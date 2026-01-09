// control-statements
//! loops

//! while
// let i = 0
// while (i<=10){
//     console.log(i);
// donot forget this as it is the exit block
//     i++
// }
//! do while
// difference between while and do while , do while runs at least 1 time and while doesn't execute if condition is wrong
// do{
//     console.log(i)
//     i++
// } while(i<=10)

//! for loop

// for(let i=0 ;i<=10 ; i++){
//     console.log(i)
// }

//! for in
//used in objects
// can also be used for iterables
let user = {
  name: "Ram",
  email: "ram@gmail.com",
  password: "1245531",
};

for (key in user) {
  console.log(key, ":", user[key]);
}

let arr = [12, 34, 55, 67];

for (i in arr) {
  console.log(i, ":", arr[i]);
}
//! for of
// used in array , list and others iterables
// can't be used in object

for (value of arr) {
  console.log(value);
}
//strings also work in for of
// for (value of 'user'){
//     console.log(value)
// }

//convert object into array
let obj_values = Object.values(user);
console.log(obj_values);
let obj_keys = Object.keys(user);
console.log(obj_keys);

// array to object
let entries = Object.entries(user);
console.log(Object.entries(user));
console.log(Object.fromEntries(entries));

// string
let x = "hello";
console.log(x.split(""));
console.log(x.at(0));
console.log(x.charAt(3));
console.log(x.toLocaleUpperCase());
console.log(x.endsWith("o"));
console.log(x.padStart(10, "0")); // adds secondary value to the front of string to make it first value characters
console.log(x.replace("h", "a"));
console.log(x.trim()); //trims string so that space is removed
