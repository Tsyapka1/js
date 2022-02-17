'use strict';


class Animal {
  constructor(type, nickname) {
    this.type = type;
    this.nickname = nickname;
  }

  speak() {
    return `Животное ${this.nickname} издает звуки`;
  }
}

class Snake extends Animal {
  constructor(nickname) {
    super('Змея', nickname);
  }

  speak() {
    return `${this.type} ${this.nickname} шипит`;
  }
}

class Cat extends Animal {
  constructor(nickname) {
    super('Кот', nickname);
  }

  speak() {
    return `${this.type} ${this.nickname} мяукает`;
  }
}

class Trainer {
  trainSpeech(animal) {
    return animal.speak();
  }
}

const animal = new Animal('животное', 'Пушок');
const snake = new Snake('Ефрасинья Петровна');
const trainer = new Trainer();
dwcsadec