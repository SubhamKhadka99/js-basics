//! object
// { }

// new keyword => new
// const new_obj = new Object()

//object literal => {} using direct curly bracket

// const obj={}

const person = {
    name :'Subham' ,
    age:20

}

console.log(person)

//accessing properties

//? accessing methods
// dot notation

let person_name = person.name
console.log(person.name)

// bracket notation
console.log(person['age'])

let key = 'name'
console.log(person.key)//key isn't defined inside person
console.log(person[key])// don't use string value it gives same result as person.key

//! modify
person.age = 30
person['name']='SKOP'

console.log(person)

//adding new property

person.email = 'skop@gmail.com'
console.log(person)

//! delete

delete person.name
console.log(person)

//Parseby Reference 

let x = 'hello'
let y = x
x = 48
console.log(x,y)

let obj = person
person.password='123456'
console.log(person,obj)

// using greet atrribute and creating an object inside of an object
let user ={
    name:'Hello',
    email:'hello@gmail.com',

    greet(){
        console.log('Hello'+ ' ' +user.name)
    } ,
    
    address :{
        country: 'Nepal',
        city:'Kathmandu'
    }


}

user.greet()

// console.log(user.address.city)
// console.log(user['address']['country'])


// const address = {
//     country: 'America' ,
//     city:'Texas'
// }

// console.log(address)