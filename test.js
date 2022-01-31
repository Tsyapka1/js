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

let num1 =10;
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
