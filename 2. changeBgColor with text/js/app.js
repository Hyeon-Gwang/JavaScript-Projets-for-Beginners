const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const hexValue = document.querySelector('#hex-value');

const color = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6'];

function randomBg(){
    const i = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[i];
    hexValue.innerHTML = '&nbsp' + color[i];
}

function changeBg(){
    btn.addEventListener('click', randomBg);
}

changeBg();