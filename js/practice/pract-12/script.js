'use strict';

const someString = 'Hard working!';

function reverseString(str){
    if (typeof(str) !== 'string') {
        console.log('Error!');
    } else {
        let arr = str.split('');
        let result = '';
    
        arr.reverse();
        for(let i = 0; i < arr.length; i++){
            result += arr[i];
        }
    
        console.log(result);
    }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'BGN', 'CNY'];

function availableCurr(arr, missingCurr){
    let str = '';

    if(arr.length === 0){
        str = 'No currencies available.';
    } else {
        str = 'Available currencies: ';
    }

    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `\n${curr}`;
        }
    });

    console.log(str);
}

reverseString(someString);
availableCurr(['EUR', 'USD', 'UAH', 'BGN', 'CNY'],  'UAH');