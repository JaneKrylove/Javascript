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