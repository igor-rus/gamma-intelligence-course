const title = document.getElementById('main-heading')
let element = document.querySelectorAll('.list-item');
let listItems = document.getElementsByClassName('list-item');
let tags = document.getElementsByTagName('li');

title.style.color = 'red';
title.style.backgroundColor = 'white';

let attribute = title.getAttribute('id');
console.log(title);
title.removeAttribute('id');
console.log(title);

for (let item of listItems) {
    item.style.color = 'green';
}

const ul = document.querySelector('ul')
const li = document.createElement('li');
ul.append(li);

const firstLi = document.querySelector('.list-item')
console.log(firstLi);
console.log(firstLi.innerText);
console.log(firstLi.textContent);
console.log(firstLi.innerHTML);


li.innerHTML = 'Mountain Hiking';
//li.setAttribute('class', 'yoba')
li.className = 'list-item';
li.style.color = 'green';
li.classList.add('yoba');
console.log(li.classList.contains('list-item'));

// title.remove()

console.log(ul.parentNode);
console.log(ul.parentElement);

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

//nodes see invisible rendered symbols
console.log(ul.childNodes);

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.previousSibling);
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

const fn = () => {
    console.log("hello");
}

// const btn1 = document.querySelector('.btn-1');
// btn1.addEventListener('click', () => {
//     console.log("yoba");
// });


// const container = document.querySelectorAll('.container');
// for (let element of container) {
//     element.addEventListener('mouseover', () => { element.style.backgroundColor = 'green'; });
//     element.addEventListener('mouseout', () => { element.style.backgroundColor = 'dodgerblue'; });
// }

const container = document.querySelector('#sports');

function hideReveal() {
    if(container.classList.contains('hidden')) {
        container.classList.remove('hidden')
    } else {
        container.classList.add('hidden')
    }
}

let button = document.querySelector('.btn-1');
button.addEventListener('click', hideReveal);

const btn2 = document.querySelector('.btn-2');
const nameInput = document.querySelector('#name');
console.log(nameInput);
console.log(btn2);
btn2.addEventListener('click', () => console.log(`Hello ${nameInput.value}`));

