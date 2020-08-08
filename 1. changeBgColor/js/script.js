const body = document.querySelector('body');
const button = document.querySelector('button');

const color = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6'];

body.style.background = '#1abc9c';

function randomColor(event){
    const randomNum = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[randomNum];
}

function changeBgColor(){
    button.addEventListener('click', randomColor);
}

changeBgColor();