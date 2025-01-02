"use strict";
const e1 = {
    name: 'Julio',
    startDate: new Date(),
    privilages: ['Create-Server']
};
function Add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privilages' in emp) {
        console.log('Privileges: ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}
printEmployeeInfo(e1);
