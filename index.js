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

let x = prompt('Введите первое число', );
let y = prompt('Введите второе число', );
let z = prompt('Введите 1 чтобы сработал знак +, введите 2 чтобы -, 3 чтобы * и 4 для/' );


let result;

switch(z){
        case '1':result = x + y;
    break;
        case '2':result = x - y;
    break;
        case '3':result = x * y;
    break;
        case '4':result = x / y;
    break;
    default: result = 'Not have comand.';
}
alert(result);


