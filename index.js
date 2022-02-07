'use strict';

// Первая задачаю

const arrOne = [1,2,3];
const arrOneOne = [4,5,6];
const arrOneFinish = arrOne.concat(arrOneOne);

// Вторая задача
const arrSecond = [1,2,3];
const arrSecondFinish = arrSecond.reverse();

// Третяя задача
const arrThird = [1,2,3];
const arrThirdOne = arrThird.push(4,5,6);
const arrThirdTwo = arrThird.unshift(4,5,6);

// Четвёртая задача
const arrFour = ['js', 'css', 'jq'];
const arrDelletFour = arrFour.shift()
const arrFourDellet = arrFour.pop();

// Пятая задача
const arrFive = [1,2,3,4,5];
const arrFiveOne = arrFive.slice(1,3);
const arrFiveTwo = arrFive.slice(4,5);

// Шестая задача
const arrSixt = [1, 2, 3, 4, 5];
const arrSixtSpliceOne = arrSixt.splice(1,5, 1,4,5);
const arrSixtSpliceTwo = arrSixt.splice(1,0, 2,3,4);
const arrSixtSpliceThird = arrSixt.splice(3,0, 'a','b','c');
const arrSixtSpliceFour = arrSixt.splice(1,0, 'a','b');

// Седьмая задача
const arrSeven = [3, 4, 1, 2, 7];
function arrSevenSort(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  };
  arrSeven.sort(arrSevenSort);
  
// Восьмая задача

// Девятая задача

// Десятая задача

// Одинадцатая задача