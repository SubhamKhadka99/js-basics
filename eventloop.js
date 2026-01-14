//! event loop

//! synchronous & single threaded

//! callstack =>
// ! web apis / libuv
//! callback/task queue
//* 1.macrotask queue / 4
//* 2.microtask queue / 5
//! event loop
// console.log("hello");

// setTimeout(() => {
//   console.log("hello 2");
// }, 3000);

//1. timers
// 2. promise , nexttick ,

const a = () => {};

const b = () => {
  a();
};

const c = () => {
  b();
};

c();






// 
// 
// b()
// b()


//! phases
//  synchronous

// 1. timers -> settimeout / interval
// 2. pending callbacks -> system level callbacks  -> tcp error
// 3. prepare/idle -> nodejs internal use
// 4. polling  => i/o , http 
// 5. check -> setImmediate
// 6. close -> close callbacks -> socket.on('close')

// promise process.nexttick()