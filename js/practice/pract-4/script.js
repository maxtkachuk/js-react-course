'use strict';

const arr = [1,2,3,4,5,7];
var result = [];

for(let i = 0; i < arr.length; i++){
    result[i] = arr[i];  
}

console.log(result);

var secondArr = [5, 10, 'Shopping', 20, 'Homework'];

for(let i = 0; i < secondArr.length; i++){
    if(typeof(secondArr[i]) == 'number'){
        secondArr[i] = secondArr[i] * 2;
    } else if(typeof(secondArr[i]) == 'string') {
        secondArr[i] = secondArr[i] + ' done';
    }
}

console.log(secondArr);

for(let i = 1; i <= secondArr.length; i++){
    result[i - 1] = secondArr[secondArr.length - i];
}

console.log(result);

