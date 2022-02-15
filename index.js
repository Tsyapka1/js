'use strict';

class Moder {
    constructor(name, surname, age, email) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.emeil = email;
    };
    set name(newName) {
     if (typeof newName !== 'string') {
       throw new TypeError('age must be string');
     }
     if (newName > 150 || newName < 0 || isNaN(newName)) {
       throw new RangeError('Age must be normal');
     }
 
     this._name = newName;
   };
 
   get age() {
     return this._age;
   };
   set age(newAge) {
    if (typeof newAge !== 'number') {
      throw new TypeError('age must be number');
    }
    if (newAge > 150 || newAge < 0 || isNaN(newAge)) {
      throw new RangeError('Age must be normal');
    }

    this._age = newAge;
  };

  get email() {
    return this._emeil;
  };
  set email(newEmail) {
    if (typeof newEmai !== 'string') {
      throw new TypeError('email must be string');
    }
    if (newAge > 150 || newAge < 0 || isNaN(newAge)) {
      throw new RangeError('Age must be normal');
    }

    this._age = newAge;
  };

  get surname() {
    return this._surname;
  };
  set surname(newSurname) {
    if (typeof newSurname !== 'string') {
      throw new TypeError('age must be string');
    }
    if (newAge > 150 || newAge < 0 || isNaN(newAge)) {
      throw new RangeError('Age must be normal');
    }

    this._surname = newSurname;
  };
  
 
}

    

getFullName = () => `${this.name} ${this.surname}`;

isAdult = () => this.age >= 18;

  const user = new User('Ivan', 'Ivanov', 42);
  const user1 = new User('Ivan', 'Ivanov', 12);
  const user2 = new User('Test', 'Testovich', -500);