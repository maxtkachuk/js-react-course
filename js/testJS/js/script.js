'use strict';

// let user = {
//     name: 'Maksym'
// };

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map);

let cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lina = {name: 'Evelina'};
let alex = {name: 'Alex'};

cacheUser(lina);
cacheUser(alex);

lina = null;

console.log(cache.has(lina));
console.log(cache.has(alex));

// WeakSet
// add, has, delete

let messages = [
    {text: 'Hello!', from: 'John'},
    {text: 'World!', from: 'Alex'},
    {text: '......', from: 'Maksym'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));
