//Домашнее задание 1 (15.05.2023)

/* 1. cоздать переменную userAge и задать ей значение 20;
написать условие: если пользователю больше или равно 18, выводить в консоль: 'вход разрешен' иначе 'вход запрещен' */

/* let userAge; 
userAge = 20;
if ((userAge > 18) || (userAge === 18))
{     
    console.log ('Access allowed');
}
    else {
    console.log('Access denied');
}
*/

/*2. написать переменную userName с любым строковым значением. Написать условие, которое проверяет, что userName это строковый тип. 
В случае успеха выводить в консоль значение этой переменной (использовать оператор typeof)*/

/*let userName;
userName = "newName";
if (typeof userName) {
    console.log(userName);
}

*/

/*3. воспользовавшись переменной userAge написать условие, в котором проверяется диапазон возраста: если возраст от 0 до 70 
включительно выводить в консоль 'молодой' иначе 'пожилой'*/

/*let userAge;
if (0  > userAge < 70) {
    console.log('forever young');
} else {
    console.log('you are old man, dude')
}
*/

/*4. создать переменную 'a' со значением '1'. написать условие проверки равенства переменной "а" и 1. 
Если равны, выводить "равны" иначе нечего не делать. Использовать строгое равенство с проверкой типов */

/*let a = '1';
if (a === '1') {
    console.log("equal")
}
*/

//Домашнее задание 2 (25.05.2023)

/* 5. создать переменную 'b' и присвоить ей 1 если 2 равно 2, иначе присвоить 0. Использовать тернарный оператор

let b = 1 === 2 ? 2 : 0;

console.log (b) */

/* ***** Задача на switch: *****

1. есть код написанный на if-ах, переписать его на switch

const a = 10;

if (a === 9) {
  console.log(9);
} else if (a === 10) {
  console.log(10);
} else {
  console.log("default");
}
*/

/*const a = 10;
switch (a) {
    case 9:
      console.log(9);    
      break;
      case 10:
        console.log(9);    
        break;
    default:
        console.log("default");
        break;
}
*/

//Домашнее задание 3 (30.05.2023)

// Задачи на циклы
/* 1. есть массив const arr = [1,2,3]. Прокрутить массив, и на каждой итерации выдавать в консоль строку: 
"Индекс: 0, значение 1" и тд.  */

/*
const arr = [1, 5, 3];

for(let i = 0; i < arr.length; i++) {

  console.log(`Индекс:  ${i} , значение:  ${arr[i]}`)

}

*/

/*2. есть массив const arr = [1,2,3]. С помощью цикла умножить каждый элемент массива на 2 

const arr = [1,2,3];


for(let i = 0; i < arr.length; i++) {
  
  arr[i] *= 2;

           
}

console.log(arr);

*/

/* 3. есть массив const arr = [1,2,3]. Необходимо вывести в консоль только 1 и 3 


const arr = [1,2,3];

for(let i = 0; i < arr.length; i++) {

  if (arr[i] === 2) {
    continue;

  }

  console.log(arr[i]);

}

*/

/* 4. есть массив const arr = [1,2,3]. Необходимо вывести в консоль только 1, а потом прервать цикл 

const arr = [2, 3, 4, 1, 6];

for(let i = 0; i < arr.length; i++){
  if(arr[i] === 4) {

    console.log(arr[i]);
    break;
  }

    console.log(arr[i]);
}

*/

//Домашнее задание 4 (09.06.2023)

/*5. есть массив const arr = [10, 20, 3, 8, 15]; Если элемент массива больше или равен 10, то умножить его на 2. Иначе вычитать 10 

const arr = [10, 20, 3, 8, 15];

for (let i = 0; i < arr.length; i++){
  
    if (arr[i] >= 10) {
      arr[i] *= 2;


}   else {
      arr[i] -= 10;
}

}

 console.log(arr);


*/

/*6.Написать цикл, который выполнится хотя бы 1 раз, при ложном условии в цикле.

do{
  console.log("Try again");
}
while(false);

*/

/*7. есть цикл фор, который выводит числа от 0 до 4. Необходимо переписать его на while
for (let i = 0; i < 5; i++) {
  console.log(i);
} 

let a = 0;

while(a < 5){

   console.log(a);

   a = a + 1;

}

*/

//Домашнее задание 5 (30.06.2023)

/* ***** Задачки на функции: ***** */

/*1. написать функцию, которая принимает Фамилию Имя Отчество, и возвращает строку в формате
'Имя: Иван, Фамилия: Иванов, Отчество: Иванович'  */

/*
function userName(name, surname, fatherName) {
  return `Имя: ${name}, Фамилия: ${surname}, Отчество: ${fatherName}`;
}

/* 

параметры: name,   age
аргументы: `Иван`, 20


*/

// console.log(userName(`Иван`, `Иванов`, `Иванович`));

/* 2. написать функцию, которая складывает все переданные ей числа. Два числа сделать обязательными, и проверить что их точно ввели, иначе выдавать строку 'Введите обязательные аргументы'
остальные числа необязательные (сделать с arguments).  */

// function sum(a, b) {
//   if (arguments[0] === undefined && arguments[1] === undefined) {
//     return "Введите обязательные аргументы";
//   }

//   // let finalSum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== `number`) {
//       return 'type argument is not number';
//     }

//     finalSum += arguments[i];
//   }

//   return finalSum;
// }

// console.log(sum(`vasya`, 25, 20, 30));

// function maxNumber() {
//   let maxNumber = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if(maxNumber < arguments[i]) {
//       maxNumber = arguments[i];
//     }
//   }
//   return maxNumber;
// }
// console.log(maxNumber(1, 20, 3, 4));

// попробуйте сделать чтобы функцция работала с отрицательными числами

// Домашнее задание 6  (08-08-2023)

/* Задача 1: написать функцию, которая принимает Фамилию Имя Отчество, и возвращает строку в формате
'Имя: Иван, Фамилия: Иванов, Отчество: Иванович' */

// function getName(surname, secondname, name) {
//   return `Имя: ${name}, Фамилия: ${surname} Отчество: ${secondname}`;
// }

// console.log(getName(`Иванов`, `Иванович`, `Иван`))

/* 

get отдаем
set устанавливаем, add добавляем
has/is проверяем
remove/delete удаление

*/

/* Задача 2: написать функцию, которая складывает все переданные ей числа. Два числа сделать обязательными, 
и проверить что их точно ввели, иначе выдавать строку 'Введите обязательные аргументы'
остальные числа необязательные (сделать с arguments). */

// function sumNumbers() {
//   if (typeof arguments[0] === undefined && arguments[1] === undefined) {
//     return "Введите обязательные аргументы";
//   }

//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== `number`) {
//       return 'this argument is not number'
//     }
//     result += arguments[i];
//   }

//   return result;
// }

// console.log(sumNumbers(5, `vasya`, 15, 20, 25, 30))

/* Задача 3: написать функцию которая запрашивает возраст через prompt, и далее выводит строку: 
'вход разрешен' если человеку есть 18 лет, и обратное если нет 18. */

// let age = prompt('Введите ваш возраст?', '');

// if (age > 19) {
//   console.log("Вход разрешен");
// } else {
//   console.log("Вход запрещен");
// }

/* Задача 4: написать функцию, которая принимает кол-во лет человека, а так же функцию для успеха и функцию для ошибки. 
Проверить, если человеку есть 18 лет, вызывать успешную функцию, иначе вызывать функцию с текстом ошибки. */

// function getAge(age, success, error) {
//   if (age < 18) {
//     return error();
//   } else {
//     return success();
//   }
// }

// function success() {
//   return 'welcome';
// }

// function error() {
//   return 'wrong age';
// }

// console.log(getAge(30, success, error));

// function success() {
//   return 'welcome';
// }

// const newFunction = success;
// const newFunction2 = success;

// console.log(newFunction2());

/* Задача 5: есть функция getName, переписать ее на максимально короткий вариант используя стрелочную функцию */
// function getName(name) {
//  return name;
// }

// Решение:
// const getName = name => name;

// const getName = (name) => {
//   return name;
// }

// console.log('Jane');

/* Задача 6: есть функция getModifyName, переписать ее на максимально короткий вариант используя стрелочную функцию. 
А в одну строку можно ? */

// function getModifyName(name) {
//  const welcom = "hello!";
//  return `${welcom} ${name.slice(0, 1).toUpperCase() + name.slice(1)}`;
// }

// Решение:
// const getModifyName = name => `Hello, ${name.slice(0, 1).toUpperCase() + name.slice(1)}`;

// console.log(getModifyName('jane'));

// console.log('hello'.toUpperCase());

/* Задача 7: есть стрелочная функция hello, хочется чтобы, в консоль выдало строку 'hello' . Найти и исправить ошибки.
const hello = {} -> hello;  */

// Решение:
// const hello = (message) => message;

// console.log(hello('hello'));

// function sum(a, b) {
//   return a + b;
// }

// sum(1,2);

// Домашняя работа 29-08-2023

// function card(title, description, price) {
//   return `<div class="card">
//                 <div class="card__title">${title}</div>
//                 <div class="card__description">${description}</div>
//                 <div class="card__price">${price}</div>
//             </div>`;
// }

// console.log(card("Заголовок", "Описание", 5000));
// console.log(card("Заголовок", "Описание", 3000));
// console.log(card("Заголовок", "Описание", 1000));

/* 

ДЗ:

ниже написать еще два варинта этого компонента (f e, f a)

*/

/* FE
const card = function(title, description, price) {
  return `<div class="card">
                <div class="card__title">${title}</div>
                <div class="card__description">${description}</div>
                <div class="card__price">${price}</div>
            </div>`;
}

console.log(card("Заголовок", "Описание", 5000));

*/

// FA
// const getCard = (title, description, price) => {
//   return `<div class="card">
//                 <div class="card__title">${title}</div>
//                 <div class="card__description">${description}</div>
//                 <div class="card__price">${price}</div>
//             </div>`;
// }
// console.log(getCard("Заголовок", "Описание", 5000));

// const test = () => {

// }

// ДЗ: описать несколько предметов вокруг 29-08-2023

// console.log(a, b);

// car2.marka = "lada";

// console.log(car1);
// console.log(car2);

// console.log(moveTop());

const printer = {
  pName: "canon",
  color: "black",
  ram: 512,
  connection: "wifi",
  pStatus: false,

  switchOn() {
    this.pSatus = true;
  },

  switchOff() {
    this.pStatus = false;
  },
};

const mobilePhone = {
  mName: "samsung",
  color: "blue",
  androidVersion: 13,
  memory: 256,
  mStatus: false,

  // switchOn() {
  //   this.mStatus = true;
  // },

  // switchOff() {
  //   this.mStatus = false;
  // }

  power() {
    //              !true
    this.mStatus = !this.mStatus;
  },

  updateVersion() {
    this.androidVersion = this.androidVersion + 1;
  },
};

const book = {
  bName: "russianVerbs",
  published: 2019,
  autor: "Baranova",
  level: "elementary",
  bStatus: "available",
};

let car1 = {
  marka: "bmw",
  color: "black",
  engine: 2.5,
  openStatus: false,
  position: {
    x: 0,
    y: 0,
  },

  open() {
    this.openStatus = !this.openStatus;
  },

  isOpen() {
    return this.openStatus;
  },

  moveTop(step) {
    if (this.isOpen()) {
      this.position.y = this.position.y + step;
      return `Я ${this.getMarka()} двигаюсь вперед, моя позиция ${this.getPosition()}`;
    }
  },

  moveBottom(step) {
    this.position.y = this.position.y - step;
    return `Я ${this.getMarka()} двигаюсь назад, моя позиция ${this.getPosition()}`;
  },

  moveRight(step) {
    this.position.x = this.position.x + step;
    return `Я ${this.getMarka()} двигаюсь вперед, моя позиция ${this.getPosition()}`;
  },

  moveLeft(step) {
    this.position.x = this.position.x - step;
    return `Я ${this.getMarka()} двигаюсь вперед, моя позиция ${this.getPosition()}`;
  },

  getPosition() {
    return this.position;
  },

  getMarka() {
    return this.marka;
  },
};

console.log(car1.moveLeft(5));
console.log(car1.moveLeft(5));
console.log(car1.moveLeft(5));

/* 

ДЗ:
1. дописать moveBottom moveRight moveLeft, чтобы координаты менялись. Проверить после движения в консоли

*/
