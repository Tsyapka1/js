// Функции ----
// alert(); -- вызов окна подтверждения

// prompt(); ---вызов alaрма с ответом

// console.log(); --- вызов консоли

// return --- работает в функции только Один раз.!!

// confirm --- Tru or false Еще одно выпадающее окно. Которое имеет только два значение(booling)










console.log('ab' < 'abd');  // Из-за таблицы Юникода каждая буква имеет цыфренное значение


let number = 5;

console.log(number > 0 && number < 20);

console.log(false || false);

let numb = 10;
let num = 10;
num = num + 1;

numb += 5;
console.log(num);

let num1 = 10;
let num2 = 10;

console.log(num1 === num2);


let a = 3;
let b = 4;

console.log(a*b);
console.log(a/b);
console.log(a**b);



let z = 12;
let x = 42;

console.log(z*x);
console.log(z/x);
console.log(z**x);


let num = 1;

console.log(num+=5);
console.log(num-=3);
console.log(num*=3);
console.log(num/=2);


const userName = prompt ('Enter your Name');

alert('Hello my friends ' +userName);

const input1 = +prompt('Enter num 1');
const input2 = +prompt('Enter num 2');
const result = input1 + input2;

if(isNaN(result)) {
    alert('ERROR');
} else {
    alert(result);
};

const input1 = prompt('Enter your name');
const input2 = prompt('You must go?');

const wordToCOmpare = 'yes';
const answerNo = 'no'


 if('wordToCompare' === input2) {
     alert('Buy ' +'ps')
 }



// function expression

 const askUser = function (name, answer){

     const yesAnswer = 'yes';
     const noAnswer = 'no';

     if(name === undefined || answer === undefined){
         alert('ERROR')
     }

     if (yesAnswer === answer){
         return 'Bye ' + name 
     }
     if (noAnswer === answer){
         return 'Hello ' + name
     };
 };

   const userName = prompt('Enter name');
     const userAnswer = prompt('You must go?');
     const result = askUser(userName, userAnswer);
     alert(result)




     const isEven = function(number) {
       number % 2 === 0;
        }
        
    
    
    const testNum = +prompt("NOMER");
    
    const result = isEven(testNum);
    
    console.log(result);
    

const findMinNum = function( num1, num2) {
    if(num1 > num2) {
        return num2;
    }
    else {
        return num1;
    }
}


const greetUser = function(userName) {
    if(userNme) {
        alert('Hello ' +userName);
    }
    else {
        alert('Hello Annonym');
    }
}




const checkNumber = function (num1, num2)  {
    if(typeof num1 === 'number' && typeof num2 == "number") {
        if (num1 > num2) {
            return 'Число больше'
        } else if (num1 < num2 ) {
            return 'Число меньше'
        }
        return 'Равно';

    }
}

let num1 = 5;  // Переменная области видимости, всё что в ифе не видно поскольку это область видимости (видит только что выше!!!)
 debugger;
if(true) {
     const test1 = true;
     console.log(test1);
 };



 const userRole = user;

 switch(userRole) {
     case 'user':
         console.log(user);
         break;
         
         default: {
             alert(Error);
         };
 };



//  Циклы императивные (жёсткие) , начинаются всегда с * 0 *....==>>

let isRunning = true;

while (isRunning) {
    alert(1);                       // <<------ Так правильно!  Перый вариант!
    if(isRunning) {
        isRunning = false;
        break;
    }
}

let conter = 0;

while (conter < 10) {
    conter++;

    if(counert % 2 === 0) {
        continue
    }
    console.log(conter);
}

//  Младший брат цикла вайл
do {
    conter++;

    if (counter % 2 === 0) {       
        continue
    }

    console.log(conter);

} while (couter <= 10);


//  Ещё один цикл

for( let counter = 0;counter <= 10;counter++) {
     console.log(counter);
}

let num1 = 0;

do {
    console.log(num1);
    num1--
} while (num > 25)


//ОООбьекты   Имя обьекта нельзя изменить но можно перезаписать его свойство.


const teacher = {
    firstName : 'Kiril' ,
    lastName : 'Sekret' ,

    sayHello: function() {
        alert('Hello');
    }
}



function Cat (name, breed, age, isMale) {
    debugger;
    // const newCat = {
    //     meow: function () {
    //         return 'Meow';
    //     }
    // };

    this.meow = function() {
        return 'Meow';
    }
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.isMale = isMale;

    return this;
};

const cat4 = new Cat('Barsick', 'siam', 3.2, true);






// Таблица умножения Обьектом
const table = {};
let left = 1;
let right = 1;
for(let i = 1; i <= 90; i++) {
    if(right !== 9) {
        table[`${left} * ${right} = `] = left * right;
        right++;
    }
    else if(right === 9){
        table[`${left} * ${right} = `] = left * right;
        left += 1;
        right = 1;
    }
}


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
    
    // function createTable () {
    //     const table = {}
    //     for(let i = 1; i<=9; i++) {
    //         for(let j = 1; j<=10; j++){
    
    //             table[`${i} * ${j} = `] = i * j;
    //         }
    //     }
    //     return table
    // };
    // // const createTable = createTableOne();
    
    
    // const newArray = ['Anubis', 'Ra', 'Faraon', 'Wuwu', 'Rere' ]
    // const deleted1 = newArray.splice(3,2, 'Oleg', 'Irina');
    // const deleted2 = newArray.slice(2,4);





    // forEach
    const arr = [5,10,47 ,true, null, 'test'];

    /*Так не делать */
    // for(let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    arr.forEach(callback);

    function callback(value, i, array) {

        console.log(`${value} с индексом ${i}`);
    };

    // MAP

   const neArr = arr.map(callback);

    function callback(value, i, array) {

        console.log(`${value} с индексом ${i}`);
        const obj = {value: 'test' , name: value.name}
        return obj
    };



    // Prototype

    const prototype = {
        greet: function() {
            return `hello ${this.name}  ${this.lastname}`;
        }
    };

    const obj = {
        name: "Test",
        lastName: "Testovich",
        __proto__: prototype,
    };




// Функция конструктор

    
    function Phone(model, price) {
        this.model = model;
        this.price = price;
    }
    
    function PhonePrototype() {     // Это прототип (функция конструктор)
        this.call = function() {
            return 'Call';
        }
        this.endCall = function() {
            return 'End Call';
        }
    };
    // const phonePrototype = new PhonePrototype();

    Phone.prototype = new PhonePrototype();

    const phone1 = new Phone('Ipone', 99);
    const phone2 = new Phone('Sony', 12);





    
function Car(manufacturer, model, releaseYear, color, fuelconsumption, volume, speed, maxspeed) {
    // debugger;
    if(typeof manufacturer !== 'string' || typeof model !== 'string' || typeof color !== 'string') {
      throw new TypeError('Need string');
    }
    if(typeof releaseYear !== 'number' || typeof fuelconsumption !== 'number' || typeof volume !== 'number' || typeof speed !== 'number' || typeof maxspeed !== 'number') {
      throw new TypeError('Need number')
    }
    
         this.manufacturer = manufacturer;
         this.model = model;
         this.releaseYear = releaseYear;
         this.color = color;
         this.fuelconsumption = fuelconsumption;
         this.volume = volume;
        this.speed = speed;
        this.maxspeed = maxspeed;
    };
 
 function CarPrototype() {
   this.driveBack = function() {
     if(this.speed <= this.maxspeed) {
       this.speed = this.speed - 10
     }
     throw new Error('Not drive')
   };
   }
   this.drive = function() {
     if(this.speed < this.maxspeed) {
       this.speed = this.speed + 10
       return this.speed;
     }else {
       return this.speed;
     };
   }
   this.breaking = function () {
     if(this.speed <= this.maxspeed) {
       this.maxspeed = this.maxspeed - 10;
       return this.maxspeed
   }else{ 
     return this.speed;
   }
 }
   this.stop = function() {
     return 0
   }
 
 
 const carPrototype = new CarPrototype();
 Car.prototype = carPrototype;
 
      
    const car1 = new Car('Mersede', 'Sprinter', 2001, 'black', 12, 100, 0, 160)
   