// Напишите программу которая сложит все числа в заданном массиве
// выведет результат в консоль
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];

const total = nums1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);


// Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

names.forEach((item) => {
    let pair = {};
    const capitalizedFirstLetter = item.charAt(0).toUpperCase() + item.slice(1);
    pair[capitalizedFirstLetter] = item.length;
    namesObject.push(pair);
})
console.log(namesObject);


// Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];
nums2.forEach((item) => {
    const triplet = {
        "number": item,
        "square": item * item,
        "cube": item ** 3,
    };
    numsRes.push(triplet);
})
console.log(numsRes);


// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];
numberRow.reverse().forEach((item) => { reversedNumberRow.push(item); });
console.log(reversedNumberRow);


// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    }
];

cars.forEach((car) => {
    console.log(`This is ${car.color} $${car.make}. It costs ${car.price}€`);
})

