//* Defines visibility or accessibility of constiable

//! scope
//let const var

//! global scope
//can access all is defined outside the block / function 
var global_var = 'global_var'
let global_let = 'global_let'
const global_const = 'global_const'

// console.log('global',global_let,global_const,global_var)

//! block scope 
// let and const can only act inside block but var can act even outside the block
if (true){
    var block_var = 'block_var'
    let block_let = 'block_let'
    const block_const = 'block_const'
   // console.log('block',global_let,global_const,global_var)
    console.log('block',block_let,block_const,block_var)

}
//! function scope
//in function all the variables let const and var can't be accessed outside the block
function scope () {
    // console.log('function',global_let,global_const,global_var)
    console.log('function',block_var)
    // console.log('function',block_let) doesnt print
    // console.log('function',block_const) doesnt print
    
    var function_var = 'function_var'
    let function_let = 'function_let'
    const function_const = 'function_const'

    console.log('function',function_let,function_const,function_var)
}
scope()

// console.log('global',function_var) error

//? let , cost => block scope
//? var => function scope



// function a (){
// //! function scope
//     let x =20
//     if (true){
//     //! block scope
//         //let x = 20; this gives error in line 56
//         console.log(x)
//         x=40
//     }
//     console.log(x)
// }
// a();


//! lexical scope

// function a (){
//     let x = 20;
//     console.log('function a',x);
//     function b (){
//         console.log('function b',x);
//         function c(){
//             console.log('function c',x);
//         }
//         c();
//     }
//     b();
// }
// a();

let x = 30

function a (){
// takes the closest x , if there isn't x in the function it goes to global to find x if not found gives error
    let x =20;
    console.log('function a ',x);

    function b (){
        let y = 10 
        console.log('function b' ,x);
        function c (){
            console.log('function c' , x);
        }
        c();
    }
    b();
}
a();

//! scope chaining


//! module scope
