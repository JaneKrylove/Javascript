"use strict";

// console.log(a);
// a = 10;

// function welcome(name) {
//        // return name + ' hello, world!';
//     return `${name} ${1+1} hello, world!`;
// }

// // console.log(welcome('Mary'))
// // console.log(welcome('Jack'))

// function sum() {
//     let result = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }

//     return result;
// }

// console.log(sum(1, 2, 3));

/* 

логин *****************
пароль *****************
кнопка "войти"

*/

// const userName = null;
// const userName = "Jack";

// let welcome;

// if (userName !== null) {
//   welcom = function () {
//     //  code
//     //  code
//     //  code
//     return "Привет дорогой друг и какое то сложное приветствие";
//   };
// } else {
//   welcom = function () {
//     return "привет юзер!";
//   };
// }

// console.log(`<header>${welcome()}</header>`);

/* 

нужен показаль авторизован ли пользователь или нет
необходима функция приветствия в зависимости от авторизации ползователя

Привет пользователь!

Привет дорогой друг и какое то сложное приветствие

*/

// функция принимала имя и фамилию человека и возвращала строку "Имя: ***, фамилия: ***"

// function getFullName(name, surname) {
//   return `Имя: ${name}, фамилия: ${surname}`;
// }

// console.log(getFullName("Ane", "Smith"));

// разобрать "use strict";

// 03-08-2023

// arrow function

// const sum = (a, b) => {
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   return a + b;
// };

// function sum() {}

// sum(1, 23, 435, 546, 567, 678, 87);

/* 

- не надо писать function
- однострчоные функции мы можем сократить и написать без тела и ретерн
- когда у нас есть 1 параметр, "()" не обязательны
- arguments нет

*/

// console.log(sum(5, 7));

// console.log("yes");

// компонент это функция

/* 

<div class="card">
    <div class="card__title">Заголовок</div>
    <div class="card__description">Описание</div>
    <div class="card__price">1000</div>
</div>

*/

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

// написать функцию которая принимает неограниченное кол-во имен, и каждый раз выводит 'привет Mary!' 'привет Ivan!'
// сделать проверку на имена. Если введено то то не типа стринг, то обрывать выполнение

// function getName() {
//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "string") {
//       return;
//     }
//     console.log(`привет ${arguments[i]}`);
//   }
// }

// getName("Mary", "Piter", "John");

// function getName(name) {
//     return `привет ${name}!`;
// }

// const names = ["Mary", "Piter", "John"];

// for (let i = 0; i < names.length; i++) {
//     if (typeof names[i] !== "string") {
//         return;
//     }
//     getName(names[i]);
// }

// const getName = function () {
//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "string") {
//       return;
//     }
//     console.log(`привет ${arguments[i]}`);
//   }
// };

// const getName = (names) => {
//   for (let i = 0; i < names.length; i++) {}
// };

// getName(["trhrt", "erhe", "grsegw"]);

// function countSymbols() {
//   let sumOfSymbols = 0;

//   for (let i = 0; i < arguments.length; i++) {
//       sumOfSymbols += arguments[i].length;
//   }

//   return sumOfSymbols;
// }

// console.log(countSymbols("Mary", "Piter", "John"));
/* 
кучка

"Mary", 4
"Piter", 5
"John" 4

return кучка

*/
// Даны два числа, необходимо сравнить их и вывести наибольшее

/* let numbers();
if (arguments[0] > arguments[1]) {
    console.log(newArrow);
} else {
    console.log(arguments[1]);
} */

// const names = ['Pit', 1, 'Jack', true, 'Mary'];

// function helloName(names) {
//     for (let i = 0; i < names.length; i++) {
//         if (typeof names[i] !== 'string') {
//             continue;
//         }
//         console.log(`привет ${names[i]}`);
//     }
// }

// const wellcome = (word) => word;

// console.log(wellcome(`привет`));

// объекты
// литеральная форма создания объекта

// 07-09-2023

// let car1 = {
//   marka: "bmw",
//   color: "black",
//   engine: 2.5,
//   openStatus: false,
//   position: [0,0],

//   open() {
//     this.openStatus = true;
//   },

//   moveTop() {
//     return `Я ${this.marka} двигаюсь вперед`;
//   },

//   moveBottom() {},
// };

// const carCopy = car1;
// const carCopy2 = car1;

// car1 = null;

// console.log(carCopy.moveTop());
// console.log(carCopy2.moveTop());

// function test() {
//   return this;
// }

// const context = this;
// console.log(context);

// console.log(test());

// контекст -> this

/* 

  459oghfeg54w
ОП: |{marka: test}|                       || ||

car1 -> null
carCopy -> 459oghfeg54w

*/

// const car2 = car1;

/* 

  459oghfeg54w re4w3t34g
ОП: |..10..|    |..11..|                    ||

a -> 459oghfeg54w
b -> re4w3t34g

*/

// let a = 10;
// let b = a;

// b += 1;

// объект human со свойствами и методами

// const human2 = {
//   name: "Mark",
//   age: 35,
//   eat: [],
//   hobbies: [],

//   getName() {
//     return this.name;
//   },

//   getAge() {
//     return this.age;
//   },

//   setEat(food) {
//     if (typeof food !== "string" || food.length === 0) {
//       return;
//     }

//     this.eat.push(food);
//   },

//   getEat() {
//     return this.eat;
//   },

//   setHobby(hobby) {
//     this.hobbies.push(hobby);
//   },

//   getHobbies() {
//     return this.hobbies;
//   },
// };

//console.log(human.getName());
//console.log(human.getAge());
// human.setEat("apple");
// human.setEat("");
// human.setEat([]);
// human.setEat(-100);
// human.setEat(true);
// console.log(human.getEat());
//human.setHobby("music");
//human.setHobby("sport");
//console.log(human.getHobbies());

/* 12 марта */

/*
const data = [
  {
    name: 'Январь',
    days: [
      {
        events: []
      },
      {
        events: [
          {
            title: 'Пойти и погулять',
            img: 'image1.jpg',
            content: 'text text',
            type: 1 // 1 - гулять 2 - game
          },
        ]
      }
    ]
  },
]

// API

// запрос на API BACKEND а htpps://mycalendar.com/calendar/month/0

//     FRONT                                         ||||||| BACKEND

*/

/* 

задача:
написать аппарат по выдаче круглых жевачек

- резервуар
- макс резервуар
- тип принимаемых жевачек (зеленая, красная)

- аппарат умеет принимать жевачку +
- аппарат умеет принимать оплату +
- аппарат умеет отдавать жевачку
- говорить, остаток

*/

/* Вернемся позже

const gumMachine = {
  box: [],
  boxMaxSizing: 10,
  gumType: ["turbo", "loveIs"],
  moneyBox: 0,
  moneyBoxSizing: 1000,
  moneyType: [10, 5],

  setGum(gum) {
    // сначало мы должны отловить ошибки
    // построить ловушки для ошибок

    // ['turbo', 'red']
    if (!this.gumType.includes(gum.type)) {
      // ошибка несоответствия типа жевачки найдена
      return;
    }

    if (this.box.length === this.boxMaxSizing) {
      // ошибка до конца заполнен box
      return;
    }

    this.box.push(gum);
  },

  // метод для приема оплаты
  setMoney(coin) {
    if (!this.moneyType.includes(coin)) {
      return;
    }

    if (this.moneyBox.length === this.moneyBoxSizing) {
      return;
    }

    this.moneyBox += coin;
  },

  // метод "Говорит остаток"
  getCountGum() {
    return this.box.length;
  },

  getAllGums() {
    return this.box;
  },

  // говорит пуст ли бокс или не пуст
  isBoxEmpty() {
    return this.box.length === 0;
  },

  //      loveIs1235
  isGumType(type) {
    return this.gumType.includes(type);
  },

  //       loveIs1235
  gumBroker(gumType, gumPrice) {
    // 0. проверить что жевачка вообще лежит в боксе
    if (this.isBoxEmpty()) {
      return;
    }

    //                loveIs1235
    // if (this.isGumType(gumType))

    // 1. проверить есть ли такая жевачка в допустимых типах

    // 2. проверить жевачка / цена
    // 3. принять деньги в moneyBox
    // 4. отдаем желаемое
  },
};

const turbo = {
  name: "turbo",
  price: 10,
  type: "turbo",
};

const loveIs = {
  name: "loveIs",
  price: 5,
  type: "loveIs",
};

gumMachine.setGum(turbo);
gumMachine.setGum(loveIs);

gumMachine.getGum("turbo", 10);


*/

/* 22-03-2024 */

/*
Создать объект машины.
+ Машина должна хранить данные о себе: марка, цвет, кол-во потребляемого топлива на 100 км.
+ Машина должна уметь ездить влево вправо вверх вниз. (при этом принимать целочисленную величину сдвига в сторону, чтобы понимать где машина находится относительно координат x y (начальные по нулям))


Усовершенствовать функционал:
+ Машина должна хранить координаты, где она сейчас находится(по умолчанию x 0 y 0) Далее в зависимости от движения, менять координаты.
+ Машина должна уметь сказать где она сейчас находится (выдавать координаты)

Усовершенствовать функционал:
+ На основании данных позиции, где машина находится сейчас, рассчитать кол-во сожженого топлива при движении. 
(брать среднее значение (12 л на 100)) 
+ Предусмотреть функционал, чтобы можно было узнать сколько литров бензина потрачено во время движения 

Усовершенствовать функционал:
+ Создать ключ (как в реальной машине) Путь она хранит пароль, который вы придумаете сами
+ А так же показатель, открыта машина или закрыта.

Далее добавить функционал:
+ Возможность вставить ключ и проверить правильность ключа (ввести пароль), если пароль верный, машина открывается, а так же машиной можно управлять (менять координаты), если не верен, нечего не делать

Далее добавить функционал:
+ Возможность вытащить ключ, закрыть машину

Усовершенствовать функционал: 
Добавить историю движения машины (координаты x y) своего рода как она двигалась. 
Пусть она хранит все движения
А так же сделать функционал, с помощью которого можно взять эту историю и посмотреть где она ездила (подумать как лучше хранить историю (формат данных))
*/

/*
let car = {
  _marka: "lada",
  _color: "red",
  _fuel: 12,
  _password: "123@",
  _openStatus: false,
  _position: {
    x: 0,
    y: 0,
  },
  _storyMove: [],

  // методы перемещения

  // right + проверка на целочисленность

  moveRight(step) {
    if (!this.isOpen()) {
      return;
    }

    if (!Number.isInteger(step)) {
      return;
    }

    this.position.x += step;
    this.setStoryMove();
  },

  moveLeft(step) {
    if (!this.isOpen()) {
      return;
    }

    if (!Number.isInteger(step)) {
      return;
    }

    this.position.x -= step;
    this.setStoryMove();
  },

  moveTop(step) {
    if (!this.isOpen()) {
      return;
    }

    if (!Number.isInteger(step)) {
      return;
    }

    this.position.y += step;
    this.setStoryMove();
  },

  moveBottom(step) {
    if (!this.isOpen()) {
      return;
    }

    if (!Number.isInteger(step)) {
      return;
    }

    this.position.y -= step;
    this.setStoryMove();
  },

  //хранение координат
  setPosition(x, y) {
    this.position.add(x);
    this.position.add(y);
  },

  // где сейчас находится?
  getPosition() {
    return this.position;
  },

  // расчет топлива (сколько сожжено топлива)
  _getBurnedFuel() {
    const currentPosition = this.getPosition();
    return ((currentPosition.x + currentPosition.y) * this.fuel) / 100;
  },

  open(password) {
    if (this.password !== password) {
      return;
    }

    this.openStatus = true;
  },

  // открыта машина или нет
  _isOpen() {
    return this.openStatus;
  },

  close() {
    this.openStatus = false;
  },

  _setStoryMove() {
    this.storyMove.push(this.getPosition());
  },

  getStoryMove() {
    return this.storyMove;
  },
};
*/

// car.position = 'привет'

// car.moveRight(1);

// console.log(car.getStoryMove());

/* 26-03-2024 */

// миксер

/* 

- марка
- мощность
- цвет
- тип продуктов (apple, orange, )
- макс объем (3 продукта)

- вкл -> одним методом 
- выкл -> одним методом
- mix
- установи продукт

*/

// function getUsers(url) {
//   // делаем запрос к серверу для получения юзеров по url
//   return [
//     {
//       name: "Pit",
//       age: 20,
//     },
//   ];
// }

// function userFilterBetween(users, from = 1, to = 100) {
//   return
// }

// function outScreen(users) {

// }

// outScreen(userFilterBetween(getUsers(url), 10, 20))

/* 

парадигмы программирования:
- процедурное
- функциональное
- ооп
  ключевые концепции:
    - инкапсуляция
    - наследование
    - полиморфизм

*/

/*
const mixer = {
  _marka: "braun",
  _power: 500,
  _color: "black",
  _productsTypes: ["apple", "orange", "melon"],
  _box: [],
  _maxBox: 3,
  _status: false,

  onOff() {
    // if (this._status === false) {
    //   this._status = true;
    // } else {
    //   this._status = false;
    // }
    this._status = !this._status;
  },

  _checkBoxSuccessSize() {
    return this._maxBox === this._box.length;
  },

  setProduct(food) {
    if (!this._productsTypes.includes(food.type)) {
      return;
    }

    if (this._checkBoxSuccessSize()) {
      return;
    }

    this._box.push(food);
  },

  mix() {
    return `Я перемешиваю ${this._box}`; //как это вывести нормально?? посмотрите в сторону метода toString у объектов
  },

  scaleMix() {
    let cupOfProducts = 0;

    for (let i = 0; i < this._box.length; i++) {
      // текущий продукт на текущем круге цикла (а продукт это объект)
      const currentProduct = this._box[i];
      cupOfProducts += currentProduct.weight;
    }
    return cupOfProducts;
  },
};

// get set геттеры и сеттеры

const apple = {
  _name: "apple grenni",
  _weight: 150,
  _type: "apple",

  get weight() {
    return this._weight;
  },

  get type() {
    return this._type;
  },

  set weight(value) {
    return (this._weight = value);
  },

  toString() {
    return this._name;
  },
};

// apple.weight; // вызов геттера
// apple.weight = 200; // вызов сеттера

const orange = {
  _name: "super orange",
  _weight: 200,
  _type: "orange",

  get weight() {
    return this._weight;
  },

  get type() {
    return this._type;
  },

  toString() {
    return this._name;
  },
};
/*
const melon = {
  _name: "voy melon",
  _weight: 300,
  _type: "melon",

  get weight() {
    return this._weight;
  },

  get type() {
    return this._type;
  },

  toString() {
    return this._name;
  },
};

*/

// mixer.setProduct(apple);
// mixer.setProduct(apple);
// mixer.setProduct(orange);

// console.log(mixer.mix());

// console.log(mixer.scaleMix());

/*
function Fruit(name, weight, type) {
  this._name = name;
  this._weight = weight;
  this._type = type;

  this.getWeight = function () {
    return this._weight;
  };

  this.getType = function () {
    return this._type;
  };

  this.toString = function () {
    return this._name;
  };
}

*/

// если в функцию передается больше 1 аргумента,
// то надо в целях предотвращения путаницы передавать данные объектом (который называется объект конфигурации)

// const dataForMelon = {
//   name: 'voy melon',
//   weight: 300,
//   type: 'melon'
// }

// const melon = new Fruit({
//   name: 'voy melon',
//   weight: 300,
//   type: 'melon'
// })

// function User(name, age) {
//   this._name = name;
//   this._age = age;
//   this._countHead = 1;
//   this._countParts = 4;

//   this.getName = function () {
//     return this._name;
//   };

//   this.getAge = function () {
//     return this._age;
//   };

//   this.say = function () {
//     return "hello";
//   };

//   this.run = function () {
//     return "go run";
//   };

//   this.play = function () {
//     return "go play";
//   };
// }

/* 

1. запрос к серверу, с попыткой получить юзеров
2. юзеры пришли (100) ([{
  name: 'Jack',
  age: 20
}])

3. serverUsersData

// API
// получить всех докторов https://mydoctor.com/doctors/all
// получить докторов по категории https://mydoctor.com/doctors/category/manual
// получить доктора по id https://mydoctor.com/doctors/id/13
// получить докторов по категории + фильтр по рейтингу https://mydoctor.com/doctors/category/manual?rating='desc'&prop

*/

/*

for (let i = 0; i < serverUsersData.length; i++) {
  new User({
  name: serverUsersData[i].name,
  age: serverUsersData[i].age,
})
}

0 
new User({
  name: serverUsersData[i].name,
  age: serverUsersData[i].age,
})
1
new User({
  name: serverUsersData[i].name,
  age: serverUsersData[i].age,
})
2
new User({
  name: serverUsersData[i].name,
  age: serverUsersData[i].age,
})

*/

// const user1 = new User({
//   name: 'Jack',
//   age: 20
// })

// const user2 = new User({
//   name: 'Jack2',
//   age: 30
// })

/* 

задача метода микс: выбрасывать строку: 'я перемешиваю: apple apple orange'

доп задача: добавить в машинку инкапсуляцию

*/

/* Д/з на 02.04.2024 */

/*
создайте объект плеер:

какие свойства есть:
- хранилище загруженных песен +
- объем памяти в МБ (заполнено/макс) +

- добавить песню (не забывать заполнять память) +
- воспроизвести по названию (если есть в плеере, то метод выбрасывает строку "проигрываю песню: название песни + слова" (это return)) - цикл for (добавить слова + геттер для слов)
- выдача сколько памяти заполнено +
- выдача сколько памяти осталось +
- удалить песню из плеера по названию - цикл for, найти позицию + splice


создать несколько объектов песен и самостоятельно подумать какие там есть свойства и методы +
сделать взаимодействие объектов песен с плеером +

*/

// console.log([10, 20, 30].splice(1, 1, 50));

/*
const pleer = {
  _box: [],
  _boxMax: 10,
  _songsTypes: ["folk", "rock", "pop"],
  _status: false,

  onOff() {
    this._status = !this._status;
  },

  // посчитать общие МБ всех песен
  countSizesMB() {
    let allSongsSize = 0;

    for (let i = 0; i < this._box.length; i++) {
      allSongsSize += this._box[i].size;
    }
    return allSongsSize;
  },

  _isWriteSuccess(size) {
    return this.countSizesMB() + size <= this._boxMax;
  },

  _isSongsType(type) {
    return this._songsTypes.includes(type);
  },

  setSong(song) {
    if (!this._isWriteSuccess(song.size)) {
      return;
    }

    if (!this._isSongsType(song.type)) {
      return;
    }

    this._box.push(song);
  },

  getFreeMemory() {
    return this._boxMax - this.countSizesMB();
  },

  removeSong(name) {
    let positionRemoveSong = -1;

    for (let i = 0; i < this._box.length; i++) {
      const currentSong = this._box[i];
      if (currentSong.name === name) {
        positionRemoveSong = i;
        break;
      }
    }

    if (positionRemoveSong !== -1) {
      this._box.splice(positionRemoveSong, 1);
    }
  },

  getSongsList() {
    return this._box;
  },
};

const song1 = {
  _name: "katyusha",
  _size: 2,
  _type: "folk",

  get type() {
    return this._type;
  },

  get size() {
    return this._size;
  },

  get name() {
    return this._name;
  },
};

const song2 = {
  _name: "humanity",
  _size: 3,
  _type: "rock",

  get type() {
    return this._type;
  },

  get size() {
    return this._size;
  },

  get name() {
    return this._name;
  },
};

const song3 = {
  _name: "london, goodbye",
  _size: 4,
  _type: "pop",

  get type() {
    return this._type;
  },

  get size() {
    return this._size;
  },

  get name() {
    return this._name;
  },
};


// pleer.setSong(song1);
// pleer.setSong(song2);
// pleer.setSong(song3);
// console.log(pleer.getSongsList());
// pleer.removeSong("humanity");
// console.log(pleer.getSongsList());


*/

// функции конструкторы

/*
function Song(name, size, type) {
  // {}
  this._name = name;
  this._size = size;
  this._type = type;

  this.getName = function () {
    return this._name;
  };
  // return {...}
}

const song4 = new Song("arigatou", 4, "ethno");

console.log(song4);

// Д/з: создать конструкторы для фруктов в миксер

*/

// Урок 24-04-2024

// кофемашина

/* 

1. объект кофемашина

свойства
- цвет
- название
- мощность
- типы кофе (будут объекты "напитки")
- отсек для воды
- состояние вкл выкл

методы
- вкл
- выкл
- set water
- go coffee(latte)

напитки:
объект
- тип
- крепость
- температура

*/

// const coffeeCar = {
//   _color: "black",
//   _name: "braun",
//   _power: 600,
//   _drinks: [
//     {
//       _name: "latte",
//       _hard: "low",
//       _temperature: 80,

//       get name() {
//         return this._name;
//       },

//       get hard() {
//         return this._hard;
//       },

//       get temperature() {
//         return this._temperature;
//       },
//     },
//     {
//       _name: "capucino",
//       _hard: "middle",
//       _temperature: 85,

//       get name() {
//         return this._name;
//       },

//       get hard() {
//         return this._hard;
//       },

//       get temperature() {
//         return this._temperature;
//       },
//     },
//   ],
//   _waterBox: 0,
//   _maxWaterBox: 1000,
//   _status: false,

//   on() {
//     this._status = true;
//   },

//   off() {
//     this._status = false;
//   },

//   setWater(water) {
//     // 1. проверить а не переполнен ли бокс _maxWaterBox // --> // 1000 уже есть 500, пришло еще 300 ? 500 + 300 <= 1000
//     if (this._waterBox + water <= this._maxWaterBox) {
//       this._waterBox += water;
//     }
//   },
// };

// go coffee -> я кофемашина braun, готовлю: latte temp 80
//  coffeeCar.goCoffee('latte') -> после того как передадим кофе, надо поискать его в _drinks (пробегать циклом for)

// coffeeCar.setWater(500);

/*

ДЗ
1. сделать go coffee
2. переписать машина конструктор

*/

/* Урок 30-04-2024 */

// Работа с кофемашиной coffee.js

/* Урок 07-05-2024 */

// работа с кофемашиной

/* Урок 18-05-2024 */

/* 

надо создать какой то объект:
способы:
- литеральный способ {} -> единичный объект
- ф конструктор (создание однотипных объектов)
- class (создание множества объектов)

*/

// // -----------product--------------------
// function createProduct() {

// }

// function removeProduct() {

// }

// function updateProduct() {

// }
// // -----------product--------------------
// const product = {
//   create() {

//   },
//   remove() {

//   },
//   update(){

//   }
// }

// class User {
//   constructor({name, age}) {
//     this._name = name;
//     this._age = age;
//     this._type = 'human';
//   }
// }

// const user1 = new User({
//   name: 'Mary',
//   age: 20,
// })

// console.log(user1)

// повторили конструктор
// function User({name, age}) {
//   this._name = name;
//   this._age = age;
//   // какой ключ будет в объекте = какое у него значение
// }

// const user1 = new User({
//   name: 'Jack',
//   age: 25,
// });

// console.log(user1)

/* 

кофемашина
- марка
- мощность
- цвет

3 варианта: литерал ф кнструктор класс
*/

/* Урок 25-05-2024 */

class Food {
  constructor({ title, price }) {
    this._title = title;
    this._price = price;
  }

  get title() {
    return this._title;
  }

  get price() {
    return this._price;
  }
}

class FoodMachine {
  _state = {
    status: false,
    products: [],
  };

  constructor({ marka, power, maxCountEat }) {
    this._marka = marka;
    this._power = power;
    this._maxCountEat = maxCountEat;
  }

  on() {
    this._setStateStatus(true);
  }

  off() {
    this._setStateStatus(false);
  }

  _setStateStatus(status) {
    this._state.status = status;
  }

  _setStateProducts(product) {
    this._state.products.push(product);
  }

  setProduct(product) {
    this._setStateProducts(product);
  }

  getProducts() {
    return this._state.products;
  }
}

const foodMachine1 = new FoodMachine({
  marka: "xiaomi",
  power: 1500,
  maxCountEat: 10,
});

const food1 = new Food({
  title: "chips",
  price: 100,
});

const food2 = new Food({
  title: "gum",
  price: 30,
});

foodMachine1.setProduct(food1);
foodMachine1.setProduct(food2);
console.log(foodMachine1.getProducts());

/* 
д/з: написать в данном стиле что-нибудь

создать класс герой (наделить его какими нибудь свойствами и методами)
установи оружие

создать класс оружие

*/

