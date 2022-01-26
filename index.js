// Функции ----
// alert(); -- вызов окна подтверждения

// prompt(); ---вызов фларма с ответом

// console.log(); --- вызов консоли

// return --- работает в функции только Один раз.!!












// console.log('ab' < 'abd');  // Из-за таблицы Юникода каждая буква имеет цыфренное значение


// let number = 5;

// console.log(number > 0 && number < 20);

// console.log(false || false);

// let numb = 10;
// let num = 10;
// num = num + 1;

// numb += 5;
// console.log(num);

// let num1 =10;
// let num2 = 10;

// console.log(num1 === num2);


// let a = 3;
// let b = 4;

// console.log(a*b);
// console.log(a/b);
// console.log(a**b);



// let z = 12;
// let x = 42;

// console.log(z*x);
// console.log(z/x);
// console.log(z**x);


// let num = 1;

// console.log(num+=5);
// console.log(num-=3);
// console.log(num*=3);
// console.log(num/=2);


// const userName = prompt ('Enter your Name');

// alert('Hello my friends ' +userName);

// const input1 = +prompt('Enter num 1');
// const input2 = +prompt('Enter num 2');
// const result = input1 + input2;

// if(isNaN(result)) {
//     alert('ERROR');
// } else {
//     alert(result);
// };

// const input1 = prompt('Enter your name');
// const input2 = prompt('You must go?');

// const wordToCOmpare = 'yes';
// const answerNo = 'no'


//  if('wordToCompare' === input2) {
//      alert('Buy ' +'ps')
//  }



// function expression
 const askUser = function(name, answer){

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