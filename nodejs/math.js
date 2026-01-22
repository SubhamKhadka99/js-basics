
// const add = (a,b) =>{
//     return a+b
// }

// // sub
// const sub = (a,b) => {
//     return a-b
// }

// exports.add = (a,b) =>{
//     return a+b
// }

// // sub
//  exports.sub = (a,b) => {
//     return a-b
// }



// common js 
// ? single export
// module.exports = add
//? multiple value export
// module.exports = {
//     sub,
//     add
// }

//! ES module

const add = (a,b) =>{
    return a+b
}

// sub
export const sub = (a,b) => {
    return a-b
}

export const div = (a,b=1) => {
    return a/b
}


export default add
