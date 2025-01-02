"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department:' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeinformations() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const Accounting = new Department('Accounting');
Accounting.addEmployee('Julio Cesar');
Accounting.addEmployee('Daniela');
Accounting.addEmployee('Catia Escobar');
Accounting.addEmployee("Rosivaldo F. De Oliveira");
Accounting.employees[4] = "Cristiane F. Ramos de Oliveira";
Accounting.describe();
Accounting.printEmployeeinformations();
