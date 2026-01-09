console.log('Hello World')
//variables
//var (avoid using this)
var a ='hello'
// var a =40
a= 56
console.log(a)
//let
let b ='world'
b=44
// let b= 40
console.log(b)
//const
const c =12
console.log(c)
// c=56 doesn't work as it is constant

//!data types
//*string
let d = 'hello'
let e = "str2"
//? template literal ( can use multiple line and embed js)
let f = `${d} user`
console.log(f)
//*number
let num =12
let g =12.45
//*boolean
let bool = true
let h = false
//*null
let i =null
//*undefined
let j = undefined

// var k = null;
// console.log(k)
// const k = undefined (don't do this / rarely used)


// naming
// camel case 
let userFullName = ''
// snake case 
let user_name = ''
// pascal case
let UserFullName = ''

//operators
//? arithmetic - , +, %(modulo),*  **(exponent) / ...
// overloading example
console.log(2+2)
console.log('hello' + 'world')
console.log(2**4)//exponential

//? assignment = += -=
let l = 2+2
let m =30

l +=m // l = l+m
l += 10//l = l + 10

//? comparision < > <= >= == === != !== --> output = true/false
console.log(l>m) //l=10 m =10 -> false
console.log(l>=m) //l=10 m =10 -> True

let x = 10
let y= '10'
console.log('==' ,x==y) //loose checking compares value 
console.log('===',x===y) //strict checking checks datatype

//? logical && , || , !

let n = true
let o = true

console.log(n&&o) // AND
console.log(n||o) //OR 


//? ternary  (? :)

//typeof
console.log(typeof o ==='string')

console.log(typeof null)//js bug type -> object

//type coercian & type conversion

let z = '122px'

console.log(Number(z))
console.log(parseInt(z))
console.log(parseFloat(z))


//truthy & falsy values

// '' , null , undefined , 0 , -0 , NaN -> falsy values
// if ('') {
// }
console.log(Boolean(' '))// anything written is truthy value even if a space is given
console.log(Boolean(null))
console.log(Boolean(0))


// non primitive 
//object
//array
// functions

const user = {
    name:'S' ,
    address : {
        city : 'ktm',
        street: '123'
    }
}

const user2 = {
    name:'A' ,
    address :{
        city:'brt'
    }

}

//! optional chaining (?) 
const user_city = user.address.city
const user2_street = user2?.address?.street //  if optional chaining ? symbol is used it doesn't pass value
const user_street = user.address.street

console.log(user2_street)



//! nullish operator(??)

const user1_street= user2?.address?.street??"Address not found"
console.log(user1_street)
