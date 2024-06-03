// кофемашина

const coffeCar = {
  brand: "delongi",
  power: 600,
  color: "black",
};

function CoffeCarCreator(config) {
  this._brand = config.brand;
  this._power = config.power;
  this._color = config.color;

  this.getBrand = function () {
    return this._brand;
  };

  this.getPower = function () {
    return this._power;
  };

  this.getColor = function () {
    return this._color;
  };
}

const coffeCar1 = new CoffeCarCreator({
  brand: "saeco",
  power: 700,
  color: "silver",
});

class CoffeCarByClass {
  constructor({ brand, power, color }) {
    this._brand = brand;
    this._power = power;
    this._color = color;
    this._type = "coffecar";
    this._system = "auto";
  }
}

const coffeCar2 = new CoffeCarByClass({
  brand: "thompon",
  power: 800,
  color: "gold",
});

console.log(coffeCar);
console.log(coffeCar1);
console.log(coffeCar2);

// миксер

const mixer = {
  brand: "braun",
  power: 800,
  color: "black",
};

function Mixer(options) {
  this._brand = options.brand;
  this._power = options.power;
  this._color = options.color;
  this._type = "home";
}

const mixer1 = new Mixer({
  brand: "rowenta",
  power: 700,
  color: "white",
});

class MixerByClass {
  constructor({ brand, power, color }) {
    this._brand = brand;
    this._power = power;
    this._color = color;
    this._type = "home";
    this._hasLightIndicate = true;
  }
}

const mixer3 = new MixerByClass({
  brand: "redmond",
  power: 600,
  color: "braun",
});

console.log(mixer);
console.log(mixer1);
console.log(mixer3);

// аппарат с жевачкой

const gumMachine = {
  _brand: "funzhou",
  _power: 900,
  _color: "red",
  _hasDisplay: true,
};

function GumMachine(config) {
  this._brand = config.brand;
  this._power = config.power;
  this._color = config.color;
  this._type = config.type;
  this._hasDisplay = true;
}

const gumMachine1 = new GumMachine({
  brand: "minchao",
  power: 1000,
  color: "gold",
  hasDisplay: false,
});

class GumMachinebyClass {
  constructor({ brand, power, color }) {
    this._brand = brand;
    this._power = power;
    this._color = color;
    this._hasDisplay = true;
  }
};

const gumMachine2 = new GumMachinebyClass({
  brand: "xiuang",
  power: 1200,
  color: "green",
});

console.log(gumMachine);
console.log(gumMachine1);
console.log(gumMachine2);
