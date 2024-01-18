// globalThis.addEventListener('click', () => console.log('window'), true);
// document.addEventListener('click', () => console.log('document'), true);
//
// document.querySelector('.box1')
//     .addEventListener('click', (e) => {
//         console.log('box1');
//         e.stopPropagation();
//     }, {once: true});
//
// document.querySelector('.box2')
//     .addEventListener('click', () => console.log('box2'), true);
//
// document.querySelector('.btn')
//     .addEventListener('click', (e) => console.log('button'), true)
//
// document.querySelector('.btn2')
//     .addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(e.target.innerText = 'clicked');
//     }, false);


document.querySelector('#cars').addEventListener('click', (e) => {
    console.log(`${e.target.getAttribute('id')} is clicked`);
    const target = e.target;
    if(target.matches('li')) {
        target.style.background = 'blue';
    }
})

const cars  = document.querySelector('#cars');
const nissan = document.querySelector('li');
nissan.innerText = 'Nissan';
nissan.setAttribute('id', 'nissan');
cars.appendChild(nissan);
