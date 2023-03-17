'use strict';

for(let i = 5; i <= 10; i++){
    console.log(i);
}

for(let i = 20; i >= 10; i--){
    if(i == 13){
        break;
    } else{
        console.log(i);
    }
}

for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

var i = 2;
while(i < 16){
    i++;
    if(i % 2 === 0){
        continue;
    } else {
        console.log(i);
    }
}

var arrNumbers = [];
var index = 0;

for(let i = 5; i <= 10; i++){
    arrNumbers[index] = i;
    index++;
}

console.log(arrNumbers);



