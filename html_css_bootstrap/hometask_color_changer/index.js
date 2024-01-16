const color = document.getElementById('color');
const button = document.getElementById('button');
button.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = color.value;
});