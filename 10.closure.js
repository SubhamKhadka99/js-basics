//! closure
//type of function that keeps the parent functions value even after execution of the parent function


//memory creation phase // context phase
// a : undefined
//x:<empty></>
// add: empty

// execution phase
// a : 10
// x :10
// add (a,b) =>{}

// console.log(a)
// var a = 10;
// console.log(a)
// let x  = 10
// console.log(x)

// const add = (z,y)=>{
//     return z+y
// }

// add()

// add exec context // function destroys itself after completion of execution
// memory creation phase
// y : undefined
//z : undefined

//execution
// y :12
//z :23


// const count = ()=>{
//     let i = 0

//     return ()=>{
//         console.log(i)
//         i++
//     }
// }
// const counter = count() //closure 
// counter()
// counter()
// counter()

// const counter1 = count() //new closure
// counter1()


//

const counter = (count) =>{
    let i = count;

   return {
        increment:()=>{
            console.log(i++)
        },

        decrement : ()=> {
            console.log(--i)
        },

        reset : ()=>{
            i=count
            console.log(i)
        }
    }
}

const counter1 = counter(1)
counter1.increment()
counter1.increment()

counter1.decrement()
counter1.decrement()
counter1.decrement()

counter1.reset()


//!function factory 

//! bank acc , acc_name , initial_balance
//deposit , withdraw , balance_inquiry , get_details

// const bank_acc = (acc_name,initial_balance) =>{
   
//     return { 
//         deposit:(dep)=>{
//         deposit = dep
//         console.log('Enter the amount to deposit')
//         return initial_balance+dep;
//         }   
//         ,
//         withdraw:(wthdraw)=>{
//            let i = wthdraw
//             console.log('Enter the amount to withdraw')
//             return initial_balance-i
//         }
//         ,
//         balance_inquiry : ()=>{
//             console.log('Your current balance is :',)
//         }
//         ,
//         get_details: ()=>{
//             console.log('Your account_name is' , acc_name, 'Your balance is ' ,blc)
//         }

//    }

// }

// result = bank_acc()


const bank_acc = (name,initial_balance=0) =>{
    let acc_name =name ;
    let balance = initial_balance;

    return{
        withdraw : (amount)=>{
            if (amount>balance){
                console.log('Insufficient balance');
                return
            }

            if (amount <=0){
                console.log('Amount must be greater than 0')
                return
            }

            balance = balance - amount
            console.log(`Hello ${acc_name} , Rs ${amount} deducted from your account new balance is ${balance}` )
        },

        deposit : (amount)=>{
            
            if (amount <=0){
                console.log('Amount must be greater than 0')
                return
            }
            balance = balance + amount
            console.log(`Hello ${acc_name} , Rs ${amount} added to your account new balance is ${balance}` )
        }

        ,
        balance_inquiry : ()=>{
        
            console.log(`Your account balance is ${balance}` )

        }
        ,
        bank_details : ()=>{
        console.log({acc_name , balance})
        }

    }
}

const user1 = bank_acc('Subham',12000)
user1.balance_inquiry()
user1.bank_details()
user1.withdraw(9000)
user1.deposit(1000)

