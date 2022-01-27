const isEven = function(number) {
    if(number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
    
}

const testNum = +prompt("proverka");

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

