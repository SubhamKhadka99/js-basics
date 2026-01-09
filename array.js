let numbers =[1,2,3,4,5,9,10,5]
// const first_el = numbers[0]
// console.log('first_el',first_el)
// console.log(numbers[2])

//! adding new elements
//arr.push()
//adds at end index
numbers.push(6,7)
console.log(numbers)

//? from start index
//arr.unshift()
// numbers.unshift(19,21)
// console.log(numbers)

//! remove elements from array
//? from end 
// arr.pop()
let last_el = numbers.pop() //! removes last elemet and returns it's value
console.log(numbers)
console.log(last_el);

//? from start
// arr.shift()
let first_el=numbers.shift() //! removes first element and returns it's value 
console.log("first",first_el)


//! get last element of array
console.log(numbers.length) // gets the length of the array
console.log('last_El' , numbers[numbers.length - 1]) //numbers.length always gives value 1 higher than the index 


//! at 
//arr.at(1) -> arr[1]
// arr.at(-1) gives end numbers , it can also pass numbers from front 
console.log(numbers.at(1))
console.log(numbers.at(-1))

//! includes
//arr.includes(value) -> boolean 
//checks if the number is in array or not
console.log(numbers.includes(5))
console.log(numbers.includes(50))

//! indexOf
//* arr.indexOf() checks index of any given number gives -1 if it is not in the array
console.log(numbers.indexOf(5))


//! lastIndexOf()
console.log(numbers.lastIndexOf(9))






//? object or array is always truthy value 
//? if two objects or array is compared using === the value is always false as it compares locations not the values

// if ({}){
//     console.log('print')
// } ans = true as {} is truthy value and if statement needs to be true to run



