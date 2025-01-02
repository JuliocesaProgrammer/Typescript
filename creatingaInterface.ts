interface person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: person;

user1 = {
    name: 'Julio',
    age: 22,
    greet(phrase: string){
        console.log(phrase + '' + this.name)
    }
};

user1.greet('Hello, my name is');