// const isEven = function(number) {
//     if(number % 2 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }

// }

// const testNum = +prompt("proverka");

// const result = isEven(testNum);

// console.log(result);

// const findMinNum = function( num1, num2) {
//     if(num1 > num2) {
//         return num2;
//     }
//     else {
//         return num1;
//     }
// }

// const colorType = prompt('Color?')
// if(colorType === 'red') {
//     alert('stop');
// }
// else if(colorType === 'yellow'){
//     alert('Wayt');
// }
// else if(colorType === 'green') {
//     alert('Go');

// }

// let x = prompt('Введите первое число', );
// let y = prompt('Введите второе число', );
// let z = prompt('Введите 1 чтобы сработал знак +, введите 2 чтобы -, 3 чтобы * и 4 для/' );

// let result;

// switch(z){
//         case '1':result = x + y;
//     break;
//         case '2':result = x - y;
//     break;
//         case '3':result = x * y;
//     break;
//         case '4':result = x / y;
//     break;
//     default: result = 'Not have comand.';
// }
// alert(result);

// for( let counter = 25;counter >= 0;counter--) {
//     console.log(counter);
// }

// let i = 25;
// do {
//   console.log( i );
//   i--;
// } while (i > 0);

// let i = 10;

// while (i < 50) {
//     i++;

//     if(i % 5) {
//         continue
//     }
//     console.log(i);
// };
// for(let conter = 10; conter <= 50; conter++) {
//     console.log(conter);

// const student = {
//   firstName: "Dima",
//   lastName: "Tsyaka",
//   age: "25",
//   weight: "120",
// };

// const myWife = {
//   firstName: "Masha",
//   lastName: "Tsyaka",
//   age: "33",
//   weight: "60",
//   addres: {
//     country: "UA",
//     city: "ZP",
//     street: "Suhoivanovskaya",
//   },
// };

// const myFriends = {
//   firstName: "Ilja",
//   lastName: "Sadohin",
//   age: "26",
//   weight: "80",
//   sayHi: function () {
//     alert("FcOf");
//   },
// };

// function greet(person) {
//     if(typeof person.firstName === 'string' && person.firstName !== '' && typeof person.lastName === 'string' && person.lastName !== '' ) {

//         return "hello " + person.firstName + " " + person.lastName;
//     }
//     return 'Неверные данные, нужен пользователь'
// }

'use stict';

// function Car(manufacturer, model, releaseYear, color, fuelconsumption, volume) {
//     // debugger;
//     this.drive = function () {
//         return 'Bru, brum!';
//     };

//     this.getDriveDistance = function () {
//         return this.volume * this.uelconsumption;
//     };
//      this.manufacturer = manufacturer;
//      this.model = model;
//      this.releaseYear = releaseYear;
//      this.color = color;
//      this.fuelconsumption = fuelconsumption;
//      this.volume = volume;
     
// }
   
// const car1 = new Car('Mersede', 'Sprinter', '2001', 'black', '12', '100')


// let num1 = 2;
// let num2 = 2;
// let num3 = 2;

// alert(`${num1}+${num2}*${num3}=${num1+num2*num3}`)

function createTable () {
    const table = {}
    for(let i = 1; i<=10; i++) {
        for(let j = 1; j<=10; j++){

            table[`${i} * ${j} = `j = i * j
        }
    }
}