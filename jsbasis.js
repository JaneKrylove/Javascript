let a = 5;
let b = 10;

console.log(a+b);

let c = 3;
let d = 2;

console.log(3**2);


let i = 'spring';
console.log(i);


let jane = 'Jane';
console.log(jane);


let trouble = 'trouble';
let maker = 'maker';

console.log(trouble + maker);


let digital1 = '1';
let digital2 = '1';

console.log(digital1 + digital2);


let string = 'съешьещеэтихмягкихфранцузскихбулочек'

console.log(string.length);


let string2 = "съешь еще этих мягких французских булочек";
console.log(string2.length);


let str1 = 'abc';
let str2 = 3;

console.log(`${str2}`);


let str3 = `abc
def`;

console.log(str3);


/* undefined */

let j;

console.log(j);

/* null */

let f = null;

console.log(f);

/* true  false */

let t1 = true;
let f1 = false;

console.log(`t1 is ${t1} or ${f1}?`);


/* NAN */

let dig = 2;
let str4 = 'abc';

console.log(dig * str4);


/* Infinity  /  -Infinity */

let z = 1;
let z1 = 0;

console.log(z/z1);


let z2 = -1;
let z3 = 0;

console.log(z2 / z3);


/* const нельзя переназначить, будет ошибка*/

// const PI = 3.14;
// PI = 5;

//console.log(PI);


let q = 11;
let o = 5;

console.log(q % o);


// устаревший синтаксис

let a5 = '5';
let a6 = '6';

console.log(+a5 + Number(a6));


let a7 = +"7";
let a8 = +"8";

console.log(a7 + a8);


//достать число 

const num = parseInt('256px');
console.log(num);

const number = parseFloat('30.5px');
console.log(number);