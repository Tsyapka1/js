'use strict';

const str = String('Test');

// function countVowels(str) {
//   if(typeof str !== 'string') {
//     throw new TypeError('ПРинимает только строки')
//   }
//   let result = 0;

//   for(let i = 0; i < str.length; i++)
//   if(str[i] == 'a' || str[i]=== 'o' || str[i] === 'u') {
//     result++
//   }
//   return result;
// }

// const str = String('Test');



const vowelsArr = ['a','e','i', 'u']
function countVowels(str,arr) {
  if(typeof str !== 'string') {
    throw new TypeError('ПРинимает только строки')
  }
  let result = 0;
  // for(let i = 0; i < str.length; i++)
  // if(vowelsArr.includes(str[i])) {
  //   result++
  // }

  for(const leter of str) {
if(arr.includes(leter.toLowerCase())) {
  result++;
};
  };
  return result;
};

