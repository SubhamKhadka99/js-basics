//! promise
// object represents the eventual completion or failure of a async task.

//* states of promise
// pending
// fulfilled
// rejected

// creating a promise

console.log("start");

// const genPromise = () =>{
//     return new Promise((resolve, reject) => {
//   let rejected = false;

//   setTimeout(() => {
//     // console.log('promise')
//     if (rejected) {
//       reject({ message: "Promise error" });
//     } else {
//       resolve({ message: "Promise resolved" });
//     }
//   }, 2000);
// });
// }

// const promise = genPromise()

// let loading

//! promise handling
// promise
//   .then((data) => {
//     //
//     console.log("then");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("catch");
//     console.log(error);
//   }).finally(()=>{
//     console.log('finally')
//   })

const register = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject({ message: "User register error" });
      } else {
        resolve({
          message: "register success",
          email: "abc@gmail.com",
          password: "123456",
        });
      }
    }, 3000);
  });
};

// const promise = register();

const loginUser = (data) => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      console.log(data);
      if (error) {
        reject({ message: "user login error" });
      } else {
        resolve({ message: "login success", _id: "123" });
      }
    }, 2000);
  });
};

// register()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// loginUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! promise chaining
// register()
//   .then((data) => {
//     console.log(data);
//     return loginUser(data);
//   })
//   .then((logindata) => {
//     console.log(logindata);
//     // return getprofile()
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! fetch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }).finally(()=>{
    console.log('finally')
  });

console.log("end");