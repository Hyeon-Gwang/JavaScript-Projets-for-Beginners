// First way

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const counter = document.querySelector('#counter');

let count = 0;

function countDown(){
  count--;
  counter.textContent = count;
  counterColor();
}

function countUp(){
  count++;
  counter.textContent = count;
  counterColor();
}

prevBtn.addEventListener('click', countDown);
nextBtn.addEventListener('click', countUp);

function counterColor(){
  if(count < 0){
    counter.style.color = "red";
  } else if(count > 0){
    counter.style.color = "green";
  } else{
    counter.style.color = "#333333";
  }
}




// Second way
// ------------- forEach문 공부하고 다시 하기 -----------
/*
const buttons = document.querySelector('.counterBtn');
const counter = document.querySelector('#counter');

let count = 0;

buttons.forEach(function () {
  buttons.addEventListener('click', function () {
    if (buttons.classList.contains('prevBtn')) {
      count--;
    } else if (buttons.classList.contains('nextBtn')) {
      count++;
    }

    counter.textContent = count;

  })
});

*/