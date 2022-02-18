'use strict';



function isFirsElementOfArray (arr, element) {
  return arr[0] === element;
};

const arr = [0,2,3,4];
const arr2 = Array(500000).fill(null).map((_,index) => index + 1)
const number1 = 8;
const number2 = 0;


console.time('0(1) big array');
const result1 = isFirsElementOfArray(arr, number1);
console.timeEnd('0(1)');

console.time('0(1)')
const result2 = isFirsElementOfArray(arr, number2);
console.timeEnd('0(1) big array');

//0 (n)

function isElementInArray (arr, elem) {
  for(let i = 0; i<arr.lenght; i++) {
    if(elem === arr[i]) {
      return true;
    }
  }
  return false;
};

console.time('O(n) best case')
const oNworst = isElementInArray(arr2, 49999);
console.timeEnd('O(n) best case')