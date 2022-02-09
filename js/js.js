const tags = document.getElementsByTagName('h1');

for(const tag of tags){
    tag.style.color = 'lightblue';
}

document.getElementById('bagpack').style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card')
for(const card of cards){
    card.style.borderRadius = '30px';
}

function consoleFunction(){
    console.log('its work');
}


const buttons = document.getElementsByClassName('btn')
for(const button of buttons){
    button.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    })
}

const subButton = document.getElementById('subscribe-button');
const subInput = document.getElementById('subscribe-input');
subInput.addEventListener('keyup',function(event){
    if (event.target.value == 'email'){
        subButton.removeAttribute('disabled')
    }
    else{
        subButton.setAttribute('disabled',true);
    }
});

function imgChange(){
    document.getElementById('imgs').src= 'images/shoes/shoe-2.png';
}

const section = document.getElementById('subscribe')
document.getElementById('subscribe').addEventListener('dblclick',function(){
    section.style.backgroundColor = 'pink';
});


