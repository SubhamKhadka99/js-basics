//! promise
// An object that represents the eventual completion or failure of async task


//* states of promise

//pending
//fullfilled
//rejected


//creating promise
// console.log('start')

// const promise = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         let rejected = true
//         if(rejected){
//             reject({message :'Promise error'})
//         }
//         else{
//         // console.log('Promise')
//         resolve({message:'Promise Resolved'})
//     }
//     },2000)

// })
// console.log(promise)

//! promise handling
//then runs only in success case fullfilled case
// promise.then((data)=>{
//     console.log(data)
// })
// // catch takes a callback and runs while promise is rejected
// .catch((error)=>{
//     console.log('Error')
//     console.log(error)
// })
// //both cases then or catch
// .finally(()=>{
// console.log('finally')
// })
// console.log('end')


//

const register = ()=>{
    return new Promise((resolve,reject)=>{
        let error = false;
        setTimeout(()=>{
            if (error){
                reject({message : 'User register error'})
            }
            else{
            resolve({message:'Register success',email:'abc@gmail.com' , password : '123456'})
        }},3000)
    })
}

const login = (data)=>{
    return new Promise((resolve,reject)=>{
        let error = false;
        setTimeout(()=>{
            console.log(data)
            if (error){
                reject({message:'User login error'})
            }
            else{
                resolve({message:'Login success' , id : '12345'})
            }
        })



    },2000)
}

// const promise = register();

// register()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// login()
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((error)=>{
//     console.log(error)
// })

//! promise chaining

// register()
// .then((data)=>{
//     console.log(data)
//     login(data)
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((error)=>{
//     console.log(error)
// })
// })
// .catch((error)=>{
//     console.log(error)
// })

//* Better practice with same output and less code

register()
.then((data)=>{
    console.log(data)
  return  login(data)
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

//! fetch() API takes promise
//! json() API takes promise

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('finally')
})

