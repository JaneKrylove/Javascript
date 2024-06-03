// function sum() {
// let finalSum = 0;

// for (let i = 0; i < arguments.length; i++) {
//     finalSum += arguments[i];
//  }
    
//     return finalSum;
// }

// console.log(sum(10000, 15000, 20000))


// function getModifyName(name) {
//     const welcom = "hello!";
//     return '${welcom}' ${name.slice(0, 1).toUpperCase() + name.slice(1)}';
//   }

/* 1.	Напишите программу, которая принимает на вход цифру, обозначающую день недели,
и проверяет, является ли этот день выходным. */

day = 0;
function checkDay() {
    if (0 < day < 6)
    return "weekday";
} 
