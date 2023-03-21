'use strict';

function fib(count){
    if(typeof(count) !== 'number' || count < 0 || !Number.isInteger(count)){
        console.log("Error!");
    } else {
        let result = '';
        let firstNum = 0;
        let secondNum = 1;

        for(let i = 0; i < count; i++){
            if (i + 1 === count) {
                result += `${firstNum}`;
            } else {
                result += `${firstNum} `;
            }
            
            let third = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = third;
        }

        console.log(result);
    }
}

fib(5);