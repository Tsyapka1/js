'use strict';

const user = {
  firstName: 'Dima',
  lastName: 'Tsyapka',
  age: 25,
  interests: {
    pcGame: [
      {
      firstGame: 'WoT',
      firstTank: 'IS-7'
    }
    ],
    myLovesSport: [{
      fristInterests: 'Football',
      secondInterests: 'Basketball'
    }]
  }
}




const { firstName, age, age: timeLine } = user;

console.log(firstName);