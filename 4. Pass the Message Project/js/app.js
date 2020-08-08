const message = document.querySelector('#message');
const submitBtn = document.querySelector('#submitBtn');
const messageContent = document.querySelector('.message-content');
const alert = document.querySelector('.alert');

function showMessage(){
    event.preventDefault();
    
    const sentMessage = message.value;
    
    if(sentMessage == ''){
        alert.classList.add('show');
        setTimeout(function(){
            alert.classList.remove('show')
        }, 2000);
    } else{
        alert.classList.remove('show');
        messageContent.innerHTML = sentMessage;
    }
    
}

submitBtn.addEventListener('click', showMessage);