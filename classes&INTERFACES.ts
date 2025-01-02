class Department{
    name: string;
    employees: string[] = [];

    constructor(n: string){
        this.name = n;
    }
    describe(this: Department){
        console.log ('Department:' + this.name);
    }
    addEmployee(employee: string){
        this.employees.push(employee);
    }
    printEmployeeinformations(){
        console.log(this.employees.length)
        console.log(this.employees);
    }
}

const Accounting = new Department('Accounting');

Accounting.addEmployee('Julio Cesar');
Accounting.addEmployee('Daniela');
Accounting.addEmployee('Catia Escobar')
Accounting.addEmployee("Rosivaldo F. De Oliveira")

Accounting.employees[4] = "Cristiane F. Ramos de Oliveira"

Accounting.describe();
Accounting.printEmployeeinformations();