'use strict';

function calculateVolumeAndArea(a){
    let volume = 0;
    let area = 0;

    if(typeof(a) === 'number'){
        volume = Math.pow(a, 3);
        area = Math.pow(a, 2) * 6;

        console.log(`Volume of cube is: ${volume}, Area of cube is: ${area}`);
    } else{
        console.log('"a" is not a number!');
    }
}

calculateVolumeAndArea(5);

function getCoupeNumber(numberOfCoupe){
    if(typeof(numberOfCoupe) !== 'number' || numberOfCoupe <= 0 || !Number.isInteger(numberOfCoupe)){
        console.log('Error! Check if the seat number entered is correct!');
    } else if(numberOfCoupe <= 0 || numberOfCoupe < 36){
        console.log(Math.ceil(numberOfCoupe / 4));
    } else {
        console.log('Error! Check if the seat number entered is correct!');
    }    
}

getCoupeNumber(37);



