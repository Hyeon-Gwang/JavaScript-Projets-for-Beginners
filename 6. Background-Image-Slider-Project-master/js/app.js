const btn = document.querySelector('.btn');
const btnRight = document.querySelector('.btn-right');

const imgContainer = document.querySelector('.img-container');

const bgList = ['contBcg-0', 'contBcg-1', 'contBcg-2', 'contBcg-3', 'contBcg-4'];

let count = 0;

function changeImg() {

  console.log('click');
  if (btn.classList.contains('btn-left')) {
    count--
    if (count < 0) {
      count = bgList.length - 1
    }

    imgContainer.style.backgroundImage = "url(./img/contBcg-" + count + ".jpeg)"
    console.log('left');
  }
  /*
  It doesn't work. I don't know why;;

  if(btn.classList.contains('btn-right')){

    console.log('right');
  }

  */
}

function change(){
  count++
  if(count > 4){
    count = 0
  }
  console.log(count);
  imgContainer.style.backgroundImage = "url(./img/contBcg-" + count + ".jpeg)"
}

btn.addEventListener('click', changeImg);
btnRight.addEventListener('click', change);