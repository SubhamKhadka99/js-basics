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

let b:number ;
b = 20
// b=''

let c:string = 'abc';
let d : boolean= true;
let e : null = null;
let f : undefined = undefined;

let g : any
// g=20
g='any'

let h : unknown;
// h =10
// h='unknown'
// h=10

// console.log(g.toUpperCase())

// if( typeof h === "string"){
//     console.log(h.toUpperCase())
// }


//! array
let arr:string[] =['a','1']
let numbers:Array<number> =[1,2,3,4,5] //generic type

//! tuples
// let user:[string,number,string] = ['ram',20,'ram@gmail.com']

//! enum -> relative constant

//! numbered enum

// enum Role {
//     USER ,
//     ADMIN =10,
//     GUEST
// }

enum Role {
    USER ='USER',
    ADMIN ='ADMIN',
    GUEST = 'Guest'
}

console.log(Role.ADMIN)
console.log(Role.GUEST)
console.log(Role.USER)

let array : string = 'Hello'
console.log(array)

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

let obj;



//! interface
// only defines structure
interface IUser {
    readonly id?:string
    name :string;
    email : string;
    password : string;
    role : Role
    phone?:string // use ? to make optional
}

let user : IUser={
id:'12',
name : 'subham',
email:'subham@gmail.com',
password:'12345',
role :Role.USER ,
phone:'12345678'
}

let user_One : IUser={

name : 'subham',
email:'subham@gmail.com',
password:'12345',
role :Role.USER ,
}

// user.id='12'


//! type alias

type UserType = {
    id:string,
    name : string ,
    email : string


}

let obj1 : UserType = {
    id:'123',
    name:'as',
    email:'asds@gmail.com'
}

//! function type
//parameter 

const greet = (name:string)=>{
    console.log(`Hello ${name}`)
}
greet('Ram')

//greet(12)

//! return type
const getFullName = (fname:string ,lname :string):string =>{
return(`${fname} ${lname}`)
}

//! void
// function doesn't return anything
const greet1 = (name:string):void=>{
    console.log(`Hello ${name}`)
}
greet1('Ram')


//typecasting
const greet2 = (user:IUser={name :'abc'} as IUser):void=>{
    console.log(`Hello ${user.name}`)
}
greet1('Ram')


//! never
// doesn't return anything 
const func = ():never=>{
    throw 'error'
}


//add 

const add = (A:number,B:number):number =>{
    return A+B;
}

//! type literal
//union & intersection

//defining new type 
type STATUS = 'success' | 'error' | 'fail'

//union
let id:string | number 
id='1'
id=12

//only takes the value assigned to new type STATUS
let res_status : STATUS;
res_status = "error"
res_status="fail"
res_status="success"

// intersection 

type A = {
    a : string 
    f : string;
}

type B = {
    b : string 
}

type C = A & B

// let D : C = {
//  a: '',
//  b:''
// }

//OR 
let E : A | B ={
    a:'',
    b:''
}


//! class

class user11 {
    public name:string ;
    protected email : string  ;
    private password :string ;
    id : number

    constructor(name:string,email:string,password:string , id:number){
        this.email=email,
        this.name=name,
        this.password=password,
        this.id=id;
    }

    getPassword():string{
        return this.password;
    }

}

const ram:user11 = new user11('Ram' , 'Ram@gmail.com','12345',12)


//! generic type 
//reuseable type

//? Generic interface

interface IBox <T> {
    message : string,
    value : T;
}

let box:IBox<number[]> = {
 message:'This is box',
 value:[12,24]
}

let string_box:IBox<string>= {
 message:'This is box',
 value:'12'
}

let number_box:IBox<number>= {
 message:'This is box',
 value:13
}


//! array function

const wrapper = <T>(value:T |T[]) :T[]=>{
    
    if(Array.isArray(value)){
        return value
    }
    
    return[value]
}

wrapper<string>('a')
wrapper([120,20])

//get first element

const getFirstElement = <T> (value:T[]):T=>{
    return value[0]
}

getFirstElement<number>([12,3456,754,35,3])