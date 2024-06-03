class Knight {
  _state = {
    health: 100,
    weapons: [],
    armors: [],
    currentWeapon: null,
    currentArmor: null,
  };

  constructor({ family, gender, age }) {
    this._family = family;
    this._gender = gender;
    this._age = age;
  }

  setStateWeapons(weapons) {
    this._state.weapons.push(weapons);
  }

  setStateArmors(armors) {
    this._state.armors.push(armors);
  }

  getWeapons() {
    return this._state.weapons;
  }

  getArmors() {
    return this._state.armors;
  }

  getWeaponByName(name) {
    for (let i = 0; i < this._state.weapons.length; i++) {
      if (name === this._state.weapons[i].name) {
        return this._state.weapons[i];
      }
    }
  }

  setStateCurrentWeapon(name) {
    const findedWeapon = this.getWeaponByName(name);

    if (findedWeapon === undefined) {
      return "оружие не установлено. так как не найдено в инвентаре";
    }

    this._state.currentWeapon = findedWeapon;
  }

  setStateCurrentWeaponRemove() {
    this._state.currentWeapon === null;
  }

  isCurrentWeapon() {
    if (this._state.currentWeapon === null) {
      return false;
    }
    return true;
  }

  attack() {
    if (this.isCurrentWeapon() === true) {
        return `attack by ${this._state.currentWeapon.name}`;
    }
  }
}



const knight1 = new Knight({
  family: "mcmillan",
  gender: "female",
  age: 20,
});

const knight2 = new Knight({
  family: "bairon",
  gender: "male",
  age: 25,
});

class Weapon {
  constructor({ name, type, power, weight }) {
    this._name = name;
    this._type = type;
    this._power = power;
    this._weight = weight;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get power() {
    return this._power;
  }

  get weight() {
    return this._weight;
  }
}

const sword = new Weapon({
  name: "sword",
  type: "steel",
  power: 10,
  weight: 12,
});

const crossbow = new Weapon({
  name: "crossbow",
  type: "arrow",
  power: 50,
  weight: 10,
});

class Armor {
  constructor({ name, type, durability }) {
    this._name = name;
    this._type = type;
    this._durability = durability;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get durability() {
    return this._durability;
  }
}

const stealArmor = new Armor({
  name: "steal",
  type: "beginner",
  durability: 100,
});

knight1.setStateWeapons(sword);
knight1.setStateWeapons(crossbow);
knight1.setStateArmors(stealArmor);
console.log(knight1.setStateCurrentWeapon('super crossbow'));

// console.log(knight1.getWeapons());
// console.log(knight1.getArmors());

console.log(knight1.attack());