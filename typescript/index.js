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
var user = ['ram', 20, 'ram@gmail.com'];
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
