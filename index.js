'use strict';

class Cat {
    constructor(breed, nickname, mouse) {
        this.breed = breed,
        this.nickname = nickname,
        this.mouse = mouse
    }
    meew() {
        return `meew`;
    }
    eat() {
        return `${this.breed} eating`;
    }
    sleep() {
        return `${this.breed} sleeping`;
    }
    catchingMice () {
        for(let i = 0; i < this.mouse; i++) {
              set.add(this.mouse[i]);
        }
    }
};

class StrayCat extends Cat {
    constructor(breed, nickname, mouse, eatMous){
        super(breed, nickname, mouse)
        this.eatMous = eatMous
    }
    

    };