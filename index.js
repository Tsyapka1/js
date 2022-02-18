'use strict';

const number1 = [1,2,3,4,4,5];
const number2 = ['Igor', 'Slavik', 'Masha', 2, 4]

const set = new Set([...number1, ...number2]); 

// for(let i = 0; i < number1; i++) {
//   set.add(number1[i]);
// };

// set.forEach((element) => {
//   set.add(element)
// });

const resultArr = [...set];