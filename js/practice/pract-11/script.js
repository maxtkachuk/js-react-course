'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr){
    let str = '';

    if(arr.length === 0){
        str = 'Family is empty.';

        console.log(str);
    } else {
        str = 'My family consist of:';

        arr.forEach(function(member){
            str += ` ${member}`;
        });

        console.log(str);
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr){
    let str = '';

    arr.forEach(function(town){
        str += town.toLowerCase() + '\n';
    });

    console.log(str);
}

showFamily(family);
standardizeStrings(favoriteCities);