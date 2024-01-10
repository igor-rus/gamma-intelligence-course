let x = '5';

// if(x === 5) {
//     console.log('STRICT');
// }
// if( x == 5) {
//     console.log('NOT STRICT');
// }
//
// if(!x) {
//     console.log('ololo');
// }

if (x === 5) {
    console.log('x is equal to five');
} else if (x > 2) {
    console.log('x is greater than five')
} else {
    console.log('x is less than five')
}
const car = {
    make: 'Honda',
    popular: true
}

if (car.popular) {
    console.log(`this ${car.make} is popular`);
} else {
    console.log(`this ${car.make} is not popular`);
}

let age = 12;

if (age >= 12 && age < 18) {
    console.log('Teenager');
}

let a = 100 > 100 || 0;
console.log(a);

let name = 'Max';
a & console.log('Hello', name);

function sumTwoNumbers(a, b) {
    let result = a + b;
    console.log(result);
}

function triangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p -c));
}

const area = triangleArea(3,4,5)
console.log(area);

const isEven = (number) => {
    return number %2 === 0;
}

console.log(isEven(1));