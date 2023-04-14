'use strict';

const now = new Date('2023-04-14');
// new Date.parse('2023-04-14');

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

console.log(`Time passed: ${end - start} ms`);