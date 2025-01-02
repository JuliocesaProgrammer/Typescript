"use strict";
let user1;
user1 = {
    name: 'Julio',
    age: 22,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hello, my name is');
