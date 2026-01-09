//! control flow
//? Normal flow top to bottom left to right 

console.log('start')

let print = false
//if
// if (print) {
//     console.log('processing')
// }


//? if-else
if (print){
    console.log('processing')
}else {
    console.log('error')
}

// if-else if -else
// let age = 20;
// if (age>=60){
//     console.log('Major')
// } else if (age <60 && age>=18){
//     console.log('adult')
// } else {
//     console.log('Minor')
// }

// console.log('end')

//! switch-case
// switch(expr){
//     case 1 : {

//     }

//     case 2 :{

//     }

//     default : {

//     }

// }


// let day = 3 ;
// switch(day){
//     case 1 : {console.log('Sunday');
//             break;
//     }

//     case 2 : {
//         console.log('Monday');
//         break;
//     }

//     case 3 : {
//         console.log('Tuesday');
//         break;
//     }

//     default : {
//         console.log('Enter a day between 1-3')
//     }

// }

//? same case can be used if the logic is same

let day = 'monday'
switch(day){
    case 'sunday' : 
    case 'saturday' :{
        console.log('weekend')
        break;
    }

    case 'monday' : 
    case 'tuesday' :
    case 'wednesday' :
    case 'thursday' :
    case 'friday' :{
        console.log('work day')
        break;
    }
    default :{
        console.log('Invalid Day')
    }
}


