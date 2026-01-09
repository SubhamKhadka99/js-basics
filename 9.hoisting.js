// moves variable or function declaration to the top of the scope

//var
console.log(a)
var a = 40;
console.log(a)

//let
//const
// TDZ => temporal dead zone


// ? console.log(b)
//let b =10;
const b =10;
console.log(b)


//! function
//function is completely hoisted
hoisting()

function hoisting (){
    console.log('Hello World')
}
hoisting()

//let, const


// y()

// let y = function (){
//     console.log('first')
// }


//var
// y() y isn't a function as var only takes declaration while hoisted
// var y = function(){

// }