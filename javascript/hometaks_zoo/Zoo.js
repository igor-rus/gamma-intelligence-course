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

    describe() {
        return `This is a ${this.species} named ${this.name}`;
    }
}

class Mammal extends Animal {
    #furColor;

    constructor(name, species, furColor) {
        super(name, species);
        this.#furColor = furColor;
    }

    describe() {
        return super.describe() + ' and it has ' + this.#furColor + ' fur color';
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
    }

    #isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    describe() {
        return super.describe() + ' and it has ' + this.#wingSpan + ' wing span';
    }
}

class Reptile extends Animal {
    #scaleType;

    constructor(name, species, scaleType) {
        super(name, species);
        this.#scaleType = scaleType;
    }

    describe() {
        return super.describe() + ' and it has ' + this.#scaleType + ' scale type';
    }
}

class Zoo {
    #animals;

    constructor() {
        this.#animals = [];
    }

    add_animal(animal) {
        this.#animals.push(animal);
    }

    get count_animals() {
        return this.#animals.length;
    }

    list_animals() {
        this.#animals.forEach((animal) => console.log(animal.describe()));
    }

    get_animals_by_species(species) {
        console.log(`We have following ${species} in our zoo:`)
        this.#animals
            .filter((animal) => animal.species === species.toLowerCase())
            .forEach((specie) => console.log(specie.describe()));
    }

    remove_animal(name) {
        this.#animals = this.#animals.filter(animal => animal.name !== name);
    }
}

const zoo = new Zoo();
console.log(`Zoo has: ${zoo.count_animals} animals`);
zoo.add_animal(new Bird("COCO", "PARROT", 3.5));
zoo.add_animal(new Bird("JACO", "PARROT", 2.5));
zoo.add_animal(new Mammal("KITTY", "TIGER", "STRIPED"));
zoo.add_animal(new Reptile("GRUMPY", "IGUANA", "HEX"));
zoo.add_animal(new Mammal("Panny", "Panda", "White"));
zoo.list_animals();
console.log(`Zoo has: ${zoo.count_animals} animals`);
zoo.get_animals_by_species("tiger");
console.log('-------------------------')
zoo.remove_animal("COCO");
zoo.list_animals();
