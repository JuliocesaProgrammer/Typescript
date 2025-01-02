type Admin = {
    name: string;
    privilages: string[]
};

type Employee = {
    name: string;
    startDate: Date;
};

//interface

type elevatedEmployee = Admin & Employee

const e1: elevatedEmployee = {
    name: 'Julio',
    startDate: new Date(),
    privilages: ['Create-Server']
}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function Add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b ==='string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

type unkownEmployee = Employee | Admin

function printEmployeeInfo(emp: unkownEmployee){
    console.log('Name: ' + emp.name)
    if ('privilages' in emp){
    console.log('Privileges: ' + emp.privilages)
    }
    if ('startDate' in emp){
        console.log('startDate: ' + emp.startDate)
        }
}

printEmployeeInfo(e1);