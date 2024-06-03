// создаем миксер

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
    if (!this._productsTypes.includes(food.getType())) {
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

/*
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

*/
// apple.weight; // вызов геттера
// apple.weight = 200; // вызов сеттера

/*
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

*/

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

// Сделаем конструктор для создания фруктов

function Fruit(config) {
  this._name = config.name;
  this._weight = config.weight;
  this._type = config.type;

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

const melon = new Fruit({
  name: "voy melon",
  weight: 300,
  type: "melon",
});

const orange = new Fruit({
  name: "super orange",
  weight: 200,
  type: "orange",
});

const apple = new Fruit({
  name: "apple grenni",
  weight: 150,
  type: "apple",
});

mixer.setProduct(melon);
mixer.setProduct(orange);
mixer.setProduct(apple);

console.log(mixer.mix());
