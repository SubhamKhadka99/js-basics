import path from "path";
import fs from "fs";

//* path ->

// let p = './folder/abc/file.txt'
// const ext = path.extname(p)
// console.log(ext) // extention name
// console.log(path.basename(p))
// console.log(path.dirname(p))
// console.log(path.isAbsolute(p))

// //! join

// console.log(path.join('..','abc','new_folder','uploads'))
// //! /
// //! .\abc\
// let pa = '../abc'

// //! resolve
// let abc = './folder/abc.txt'
// console.log(path.resolve('./folder/abc.txt'))

console.log("start");

//* fs -> file system
//? async

// fs.writeFile("file.txt", "this is file demo content", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("write complete");
//   }
// });

//? sync
// const res = fs.writeFileSync('abc.txt','This is abc file')
// console.log(res)

//* read file

// fs.readFile("math.js", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const data = fs.readFileSync('file.txt','utf8')

// console.log(data)
// console.log("end");

//* append
// fs.appendFile("file1.txt", "\nthis is new added content", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("write complete");
//   }
// });

// const new_dir = path.join(".", "new_folder", "folder", "nested");
// const new_file_path = path.join(new_dir, "file.txt");
//* directory
// fs.mkdir(new_dir, { recursive: true }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("folder created");
//     fs.appendFile(new_file_path, "new content", (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//   }
// });

// const is_file_exists = fs.existsSync(new_file_path);

// console.log(is_file_exists);

// if (is_file_exists) {
//   console.log("file read start");
//   fs.readFile(new_file_path, "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
// }

// if (fs.existsSync("./abc.txt")) {
//   fs.unlinkSync("./abc.txt");
// }

// if (fs.existsSync("folder")) {
//   fs.rmdirSync("folder");
// }
// if(fs.existsSync(new_file_path)){
//     fs.unlinkSync(new_file_path)
// }

// rename
// fs.renameSync(new_file_path, path.join(new_dir, "..", "copyfile.txt"));
// fs.copyFile()
// fs.cp()

// if(fs.existsSync(new_dir)){
//     fs.rmSync(new_dir ,{recursive:true})
// }

// copy

//* http module  ->
import http from "http";
import url from "url";

// server
const server = http.createServer((req, res) => {
  //   console.log(req);
  // req -> object  => url /user/1 , method [GET , POST ,PUT/PATCH ,DELETE] , params => , body [stream]
  // res -> object -> status code ,response data -> json  => req-res cycle
  console.log(req.url);
  const parsed_url = url.parse(req.url, true);
  console.log(parsed_url);
  //! if esle

  if (req.url === "/" && req.method === "GET") {
    res.end("Home page");
    return;
  }

  // users

  if (parsed_url.pathname === "/users") {
    if (req.method === "GET") {
      const name = parsed_url.query.name || "Guest";
      res.end("Get All Users " + name);
      return;
    }
    if (req.method === "POST") {
      res.end("Create new User");
      return;
    }
    if (req.method === "PUT") {
      res.end("update User");
      return;
    }
    if (req.method === "DELETE") {
      res.end("Delete User");
      return;
    }
  }

  //* contact
  //* category
  //* product

  //! switch

  res.end("404 not found");
});

// listen on port 8000

// server.listen(8000, () => {
//   console.log(`server is up & running at http://localhost:8000`);
// });

//! nodejs  -> runtime env for js.
//! c++ + js
//* components
//* v8 engine -> callsatck,heap memory
//* libuv => event loop , threadpool[4], http....,timers
//* node core -> c++  => http , fs , path ,os,process

// let x = 20

//* module
//? custom module
//? in-built module ->
//? thrid-party module

//! npm => node package manager
//? 1. node project initializevv =>  npm init
//? 2. install/uninstall package  => npm i <package_name> ,npm i <package_name@version>
//? 3. run scripts => npm run <script_name>

//! custom module
//* commonJs -> node defult module
// -> require(<path>)
//* ES module -> ESM -> js standard
// -> import/export keyword

//! commonjs
// const x = require('./math.js')
// const {add,sub} = require('./math')
// console.log(x)

//! esm
// import addition ,{div,sub} from './math.js'

// console.log(addition(12,56))
// console.log(sub(12,56))
// console.log(div(12,56))

//! es6 ->
//* destructure => expand
// let user = {
//     name:'abc',
//     age:12,
//     email:'abc@gmail.com'
// }

// let user_name = user.name; //abc
// let user_age = user.age;

// let {name,email,age:user_age} = user
// let {name:user_name} = user
// console.log(user_name,email)

// let arr = [23,45,67]

// let [a,b,c] = arr
// console.log(a,b)