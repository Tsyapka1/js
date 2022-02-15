'use strict';


// Наследование классов записуется именно так
class Moder extends User {      
    constructor(email) {
       super(name, surname, age)
        this.emeil = email;
    };
   

  get email() {
    return this._emeil;
  };
  set email(newEmail) {
    if (typeof newEmail !== 'string') {
      throw new TypeError('email must be string');
    }
    if (newEmail > 150 || newAge < 0 || isNaN(newEmail)) {
      throw new RangeError('Age must be normal');
    }

    this._email = newEmail;
  };
 
 
}

    

getFullName = () => `${this.name} ${this.surname}`;

isAdult = () => this.age >= 18;

  const user = new User('Ivan', 'Ivanov', 42);
  const user1 = new User('Ivan', 'Ivanov', 12);
  const user2 = new User('Test', 'Testovich', -500);