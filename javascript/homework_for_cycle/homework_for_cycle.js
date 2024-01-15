// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (current === 23) {
        break;
    }
    if (current % 2 === 0) {
        console.log(current);
    }
}


// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {
    name: 'Sarah',
    surname: 'Gold'
}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

function createHtmlTag(tagName, content) {
    return `<${tagName}>${content}</${tagName}>`;
}

let result = '';

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const h1 = createHtmlTag("h1", `Hello ${person.name} ${person.surname}`)
    const li = createHtmlTag("li", h1);
    result += li;
}

result = createHtmlTag("ul", result);
console.log(result);


// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное
function printEvenOrOddForRange(start, end) {
    if (start >= end) {
        throw new Error("Start should be less than end")
    }
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

printEvenOrOddForRange(1, 50);


// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largestOfThree(3, -1, 99));


// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка
for (let i = 0; i <= 100; i++) {
    if (((i % 5) === 0) && ((i % 3) === 0)) {
        console.log(`${i} FIZZ BUZZ`);
    } else if ((i % 5) === 0) {
        console.log(`${i} BUZZ`);
    } else if ((i % 3) === 0) {
        console.log(`${i} FIZZ`);
    }
}
