// let a =50
// a = 'abc'

//! typescript

//* superset of js

//! data types
// string , number ,boolean , null , undefined 
// array , object
//enum 
// any , unknown -> 

// implicit -> automatically assigns data type

// let a = 20
// a=''

// explicit

let b:number ;
b = 20
// b=''

let c:string = 'abc';
let d : boolean= true;
let e : null = null;
let f : undefined = undefined;

let g : any
// g=20
g='any'

let h : unknown;
// h =10
// h='unknown'
// h=10

// console.log(g.toUpperCase())

// if( typeof h === "string"){
//     console.log(h.toUpperCase())
// }


//! array
let arr:string[] =['a','1']
let numbers:Array<number> =[1,2,3,4,5] //generic type

//! tuples
let user:[string,number,string] = ['ram',20,'ram@gmail.com']

//! enum -> relative constant

//! numbered enum

// enum Role {
//     USER ,
//     ADMIN =10,
//     GUEST
// }

enum Role {
    USER ='USER',
    ADMIN ='ADMIN',
    GUEST = 'Guest'
}

console.log(Role.ADMIN)
console.log(Role.GUEST)
console.log(Role.USER)

let array : string = 'Hello'
console.log(array)