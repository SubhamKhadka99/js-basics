// Don't use arrow function in any function that uses this tag
// this is an object of the context function


class User {
    //for public field you don't need to define but for private field you need to define the class
    // name;
    // email;
    #password; // use # for making identifier private 
    
    constructor(name,email,password){
        this.name = name;
        this.email=email;
        this.#password=password;

    }
    
     getName(){
        return this.name
    }
    getPassword(){
        return this.#password
    }
}
const user = new User('ram','ram@gmail.com','123456')
const hari = new User('hari','hari@gmail.com','123456')

console.log(hari)

console.log(user.getName())
console.log(user.getPassword())

//! inheritance 
//student //* name email password roll faculty
class Student extends User {
        constructor(name,email,password,roll,faculty){
            super(name ,email,password)
            this.faculty=faculty;
            this.roll=roll;
    }
}

const student = new Student ('Shyam','Shyam@gmail.com','123456',32,'BCA')
console.log(student)
console.log(student.getPassword())


class Animal {
    constructor(name , sound){
        this.name=name
        this.sound=sound
    }

}

class dog extends Animal{
    constructor(name,sound,eat){
        super(name , sound)
        this.eat = eat;
    }
}
class cat extends dog{
    constructor(name,sound,eat){
        super(name , sound,eat)
    }
}


const dog1 = new dog ('Dog','Bark','dogfood')
console.log(dog1)

const cat1 = new cat ('cat','meow','catfood')
console.log(cat1)


//! static method

class MathUtils{
    static app_name = 'Calculator app';
    static add(a,b){
        return a + b
    }
        static sub(a,b){
        return a - b
    }
}

console.log(MathUtils.add(2,6))

console.log(MathUtils.sub(10,8))

console.log(MathUtils.app_name)

//! getter & setter 

class Circle {
    radius;
    constructor(r){
        this.radius=r
    }

    get area (){
        return 2*3.14* this.radius * this.radius
    }

    set radius (r){
        this.radius=r
    }
}

const circle = new Circle(10)
console.log(circle.area)

circle.rad = 20
console.log(circle.area)


