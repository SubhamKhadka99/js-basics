//! async

//blocking //!sync

// console.log('start')
// console.log('processing')
// console.log('end')

// non blocking
//!setTimeout async method
//* setTimeout(callback,timer/delay)
console.log("start");
// timer function pushes to thread

// const timer_id =setTimeout((name , age)=>{
//     console.log('processing',name,age)
// },2000,'ram',22)

// console.log(timer_id)

// clearTimeout(timer_id)

console.log("processing");
console.log("end");

//! set interval
// setInterval(callback,timer)

// let i = 0
// const timer_id =setInterval(()=>{

//     console.log(i)
//     if (i==10){
//         clearInterval(timer_id);
//     }
//     i++
// },1000)

// h:12 , min :20 , sec :39

// let h = 0 ;
// let min =1;
// let sec =  1;
// const timer = setInterval(()=>{

//     console.log(`${h.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`)
//  if (h===0 && min === 0 && sec ===0){
//     clearInterval(timer)
//  }
//  if(sec>=0){
//     sec--
//  }
//  if (min>0 && sec ===-1){
//     min --
//     sec =59
//  }
//  if (h>0 && min === 0 && sec === 0){
//     h--
//     min=59
//     sec=59}
// },1000)

//! callback
//callback hell
// pyramid of doom

const register = (callback) => {
  setTimeout(() => {
    console.log("user registered");
    callback(null, {});
  }, 3000);
};

const login = (callback) => {
  setTimeout(() => {
    console.log("login");
    callback();
  }, 2000);
};

const profile = (callback) => {
  setTimeout(() => {
    console.log("profile");
    callback();
  }, 1000);
};

register(() => {
  login(() => {
    profile(() => {
      console.log("profile fetched");
    });
  });
});
