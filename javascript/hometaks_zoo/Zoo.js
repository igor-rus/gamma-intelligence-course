class Animal {
    #name;
    #species;

    constructor(name, species) {
        this.#name = name;
        this.#species = species.toLowerCase();
    }

    get name() {
        return this.#name;
    }

    get species() {
        return this.#species;
    }

    description() {
        return `A ${this.species} named ${this.name}`;
    }
}

class Mammal extends Animal {
    #furColor;

    constructor(name, species, furColor) {
        super(name, species);
        this.#furColor = furColor;
        this._furColor = furColor;
    }


    get furColor() {
        return this.#furColor;
    }

    description() {
        return super.description() + ' and it has ' + this.#furColor + ' fur color';
    }
}

class Bird extends Animal {
    #wingSpan;

    constructor(name, species, wingSpan) {
        super(name, species);
        if (!this.#isFloat(wingSpan)) {
            throw new Error('Wing span should be floating point number');
        }
        this.#wingSpan = wingSpan;
        this._wingSpan = wingSpan;
    }


    get wingSpan() {
        return this.#wingSpan;
    }


    get wingSpan() {
        return this.#wingSpan;
    }

    #isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    description() {
        return super.description() + ' and it has ' + this.#wingSpan + ' wing span';
    }
}

class Reptile extends Animal {
    #scaleType;

    constructor(name, species, scaleType) {
        super(name, species);
        this.#scaleType = scaleType;
        this._scaleType = scaleType;
    }


    get scaleType() {
        return this.#scaleType;
    }

    description() {
        return super.description() + ' and it has ' + this.#scaleType + ' scale type';
    }
}

class Zoo {
    #animals;

    constructor() {
        this.#animals = [];
    }

    add_animal(animal) {
        if (animal instanceof Animal) {
            this.#animals.push(animal);
        } else {
            throw new Error('Only animals allowed')
        }
    }

    get count_animals() {
        return this.#animals.length;
    }

    list_animals() {
        this.#animals.forEach((animal) => console.log(animal.description()));
    }

    get_animals_by_species(species) {
        return this.#animals.filter((animal) => animal.species === species.toLowerCase())
    }

    remove_animal(name) {
        this.#animals = this.#animals.filter(animal => animal.name !== name);
    }
}

const zoo = new Zoo();
const king = new Mammal('Simba', 'Lion', 'golden');
console.log(`Lion kings's fur color is ${king.furColor}`);
console.log(`Zoo has: ${zoo.count_animals} animals`);
zoo.add_animal(new Bird('COCO', 'PARROT', 3.5));
zoo.add_animal(new Bird('JACO', 'PARROT', 2.5));
zoo.add_animal(new Mammal('KITTY', 'TIGER', 'STRIPED'));
zoo.add_animal(new Reptile('GRUMPY', 'IGUANA', 'HEX'));
zoo.add_animal(new Mammal('Panny', 'Panda', 'White'));
zoo.add_animal(new Bird('Gentoo', 'Penguin', 0.5));
zoo.add_animal(king);
console.log(`Added some. Zoo now has: ${zoo.count_animals} animals`);
console.log('There are following animals in the zoo:')
zoo.list_animals();
console.log('List birds:')
zoo.get_animals_by_species('parrot').forEach((parrot) => console.log(parrot.description()));
console.log('---------');
console.log('Depart COCO from the zoo')
zoo.remove_animal('COCO');
console.log('Now we have following animals left')
zoo.list_animals();
