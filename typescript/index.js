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
var b;
b = 20;
// b=''
var c = 'abc';
var d = true;
var e = null;
var f = undefined;
var g;
// g=20
g = 'any';
var h;
// h =10
// h='unknown'
// h=10
// console.log(g.toUpperCase())
// if( typeof h === "string"){
//     console.log(h.toUpperCase())
// }
//! array
var arr = ['a', '1'];
var numbers = [1, 2, 3, 4, 5]; //generic type
//! tuples
// let user:[string,number,string] = ['ram',20,'ram@gmail.com']
//! enum -> relative constant
//! numbered enum
// enum Role {
//     USER ,
//     ADMIN =10,
//     GUEST
// }
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["GUEST"] = "Guest";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.GUEST);
console.log(Role.USER);
var array = 'Hello';
console.log(array);
//! object
// let user:{
//     name:string;
//     email:string;
//     password : string
// } = {
//     name : 'ram',
//     email : 'abc@gmail.com' ,
//     password : '123456'
// }
var obj;
var user = {
    id: '12',
    name: 'subham',
    email: 'subham@gmail.com',
    password: '12345',
    role: Role.USER,
    phone: '12345678'
};
var user_One = {
    name: 'subham',
    email: 'subham@gmail.com',
    password: '12345',
    role: Role.USER,
};
var obj1 = {
    id: '123',
    name: 'as',
    email: 'asds@gmail.com'
};
//! function type
//parameter 
var greet = function (name) {
    console.log("Hello ".concat(name));
};
greet('Ram');
//greet(12)
//! return type
var getFullName = function (fname, lname) {
    return ("".concat(fname, " ").concat(lname));
};
//! void
// function doesn't return anything
var greet1 = function (name) {
    console.log("Hello ".concat(name));
};
greet1('Ram');
//! never
// doesn't return anything 
var func = function () {
    throw 'error';
};
//add 
var add = function (A, B) {
    return A + B;
};
add(10, 20);
