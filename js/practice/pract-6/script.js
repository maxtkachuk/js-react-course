'use strict';

const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
};

sayHello('Maksym');

var arr = [];
function returnNeighboringNumbers(startNum){
    arr[0] = startNum - 1;
    arr[1] = startNum;
    arr[2] = startNum + 1;

    console.log(arr);
}

returnNeighboringNumbers(5);

function getMathResult(num, count){
    let str = '';
    for(let i = 1; i < count; i++){
        str = str + num * i + '---';
    }

    console.log(str.slice(0, -3));
}

getMathResult(5, 10);


