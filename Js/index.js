'use strict';

// Работа факториала в рекурсии!!!

function factorial(number = 2) {
   if(number < 0) {
       throw new RangeError('Fc Off')
   } 
   if(number === 0 || number === 1) {
       return 1
   }
  return number * factorial(number - 1);
    }

// Бинарное дерево =>>
function getTreeSum(tree) {
    let result = tree.value;
    if(tree.left) {
        result += getTreeSum(tree.left);
    }
    if(tree.right) {
        result += getTreeSum(tree.right)
    }
    return result;
};