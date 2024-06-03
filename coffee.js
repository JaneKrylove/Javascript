const coffeeCar = {
  _color: "black",
  _name: "braun",
  _power: 600,
  _waterBox: 0,
  _maxWaterBox: 1000,
  _coffeeBox: 0, // резервуар для зерен кофе
  _maxCoffeeBox: 500,
  _status: false,
  _drinks: [],
  _typeOfDrinks: ['latte', 'capuccino', 'amerikana'],
  // _drinks: [
  //   {
  //     _name: "latte",
  //     _hard: "low",
  //     _temperature: 80,
  //     _beans: 10,
  //     _water: 100,

  //     get name() {
  //       return this._name;
  //     },

  //     get hard() {
  //       return this._hard;
  //     },

  //     get temperature() {
  //       return this._temperature;
  //     },

  //     get water() {
  //       return this._water;
  //     },

  //     get beans() {
  //       return this._beans;
  //     },
  //   },
  //   {
  //     _name: "capuccino",
  //     _hard: "middle",
  //     _temperature: 85,
  //     _beans: 5,
  //     _water: 150,

  //     get name() {
  //       return this._name;
  //     },

  //     get hard() {
  //       return this._hard;
  //     },

  //     get temperature() {
  //       return this._temperature;
  //     },

  //     get water() {
  //       return this._water;
  //     },

  //     get beans() {
  //       return this._beans;
  //     },
  //   },
  // ],

  on() {
    this._status = true;
  },

  off() {
    this._status = false;
  },

  isAddWater(water) {
    if (water + this._waterBox <= this._maxWaterBox) {
      return true;
    }
    return false;
  },

  setWater(water) {
    // 1. проверить а не переполнен ли бокс _maxWaterBox // --> // 1000 уже есть 500, пришло еще 300 ? 500 + 300 <= 1000
    if (this.isAddWater(water)) {
      this._waterBox += water;
    }

    // console.log(this._waterBox);
  },

  // метод для добавления зерен кофе

  /* 
  
  ДЗ:
  1. в методе setCoffee переделать условие на отлельый метод начинается с is  + (строка 80)
  2. в goCoffee пройти шаги проверки, прежде чем делать напиток (проверить включена ли машина и тд) + (строка 110)
  3. добавить в машину метод для установки напитка. (чтобы не ставить их вручную в _drinks) setDrink(объект от фк Drink)
  
  */

  isAddCoffee(beans) {
    if (this._coffeeBox + beans <= this._maxCoffeeBox) {
      return true;
    }
    return false;
  },

  setCoffee(beans) {
    if (this.isAddCoffee(beans)) {
      this._coffeeBox += beans;
    }

     },

  // функция goCoffee (приготовление напитка)

  // этот метод проверяет есть ли напиток в базе напитков

  isDrinkByTitle(title) {
    for (let i = 0; i < this._drinks.length; i++) {
      if (title === this._drinks[i].name) {
        return true;
      }
    }
    return false;
  },

  
  setDrink(drink) {
    if (!this._typeOfDrinks.includes(drink.getName())) {
      return 'тип напитка не подходит';
    }
    
    this._drinks.push(drink);
  },

  isOn() {
    // _status -> false true
    return this._status;
  },

  isSpendWaterFromBox(spendWater) {
    if (spendWater <= this._waterBox) {
      return true;
    }
    return false;
  },

  isSpendBeansFromBox(spendBeans) {
    if (spendBeans <= this._coffeeBox) {
      return true;
    }
    return false;
  },

  getDrinkByTitle(title) {
    for (let i = 0; this._drinks.length; i++) {
      if (title === this._drinks[i].name) {
        return this._drinks[i];
      }
    }
  },

  goCoffee(title) {
    // правило: сначало генерируем ошибки, а потом пшем основную логику

    // генерируем ошибку "вкл выкл"
    if (!this.isOn()) {
      return "сначало включите машину";
    }

    // генерируем ошибку "напиток не найден"
    if (!this.isDrinkByTitle(title)) {
      return "напиток не найден";
    }

    const currentDrink = this.getDrinkByTitle(title);

    if (!this.isSpendWaterFromBox(currentDrink.water)) {
      return `Ошибка воды: В резервуаре ${this._waterBox} воды, для приготовления напитка необходимо ${currentDrink.water}`;
    }

    if (!this.isSpendBeansFromBox(currentDrink.beans)) {
      return `Ошибка кофе: В резервуаре ${this._coffeeBox} кофе, для приготовления напитка необходимо ${currentDrink.beans}`;
    }

    return `Я готовлю ${title}`;
  },
};

// coffeeCar.on();
// coffeeCar.setCoffee(100);
// coffeeCar.setWater(500);
// console.log(coffeeCar.goCoffee("latte"));

/* 
    drink - string latte
    0. проверить включена ли машина
    1. понять может ли машина приготовить такой напиток
    2. проверить хватит ли ингредиентов для приготовения напитка   this._waterBox !== 0 || this._coffeeBox !== 0
    3. готовим напиток
    4. в идеале надо после пригтовления напитка, уменьшать ингредиенты в машине
    
    */

// go coffee -> я кофемашина braun, готовлю: latte temp 80
//  coffeeCar.goCoffee('latte') -> после того как передадим кофе, надо поискать его в _drinks (пробегать циклом for)

/*

ДЗ
1. сделать go coffee
2. переписать машина конструктор

*/

function Drink(config) {
  this._name = config.name;
  this._hard = config.hard;
  this._temperature = config.temperature;
  this._water = config.water;
  this._bean = config.bean;

  this.getName = function () {
    return this._name;
  };

  this.getHard = function () {
    return this._hard;
  };

  this.getTemp = function () {
    return this._temperature;
  };

  this.getWater = function () {
    return this._water;
  };

  this.getBean = function() {
    return this._bean;
  },

  this.toString = function () {
    return config._name;
  };
}

// currentDrink.water -> get
// currentDrink.getWater()

const latte = new Drink({
  name: "latte",
  hard: "low",
  temperature: 80,
  water: 100,
  bean: 5
});

const capuccino = new Drink({
  name: "capuccino",
  hard: "middle",
  temperature: 85,
  water: 150,
  bean: 10
});

const amerikana = new Drink({
  name: "amerikana",
  hard: "high",
  temperature: 90,
  water: 200,
  bean: 20
});

// а если мне нужен напиток без одного параметра?? ставим в него значение 0?

const hotMilk = new Drink({
  name: "hotMilk",
  hard: "zero",
  temperature: 80,
  water: 0,
  bean: 0
});

// const users = [
//   {
//     name: "Jack",
//   },
//   {
//     name: "Mary",
//   },
// ];

// const myName = "Mike";

// for (let i = 0; i < users.length; i++) {
//   if (myName === users[i].name) {
//     console.log(users[i].name);
//   }
// }


