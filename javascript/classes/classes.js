class Rectangle {
    #width
    #height
    #color
    constructor(width, height, color) {
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    getArea() {
        return this.#width * this.#height;
    }

    printDescription() {
        console.log(`I am ${this.#color} rectangle!`);
    }
}

console.log(Rectangle);

// const box = new Rectangle(20,30,'red');
// const box2 = new Rectangle(50,50,'green');
// console.log(box.getArea());
// box.printDescription();

class Employee {
    #name;
    #surname;
    #salary;
    static #numberOfEmployees = 0;

    constructor(name, surname, salary) {
        this.#name = name;
        this.#surname = surname;
        this.#salary = salary;
        Employee.#numberOfEmployees += 1;
    }

    static date_now() {
        return new Date().getDate();
    }

    static employee_count() {
        return Employee.#numberOfEmployees;
    }

    work() {
        console.log('I am working');
    }


    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        this.#salary = value;
    }

    get fullName() {
        return this.#name + ' ' + this.#surname;
    }

    set fullName(fullName) {
        //unpack
        [this.#name, this.#surname] = fullName.split(' ');
    }

}

const emp = new Employee('Jack', 'Smith', 2000);
const emp1 = new Employee('Jane', 'Smith', 1500);

console.log(emp.salary);
console.log(Employee.date_now());
console.log(Employee.employee_count())

class Developer extends Employee {
    #progLangs;

    constructor(name, surname, salary, progLangs=[]) {
        super(name, surname, salary);
        this.#progLangs = progLangs;
    }


    get progLangs() {
        return this.#progLangs;
    }

    work() {
        console.log('I am alt-enter  engineering');
    }


}

const javaDev = new Developer('James', 'Alter', 5000, ['java', 'typescript', 'scheme']);
console.log(javaDev.fullName);
console.log(javaDev.progLangs);

console.log(javaDev.fullName);

javaDev.fullName = 'Jack Daniels';

console.log(javaDev.fullName);

emp.work();
javaDev.work();





