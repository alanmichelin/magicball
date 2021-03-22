var answer
function move(){
    var ball = document.querySelector('img');
    var finalanswer = document.querySelector("#resp")
    finalanswer.innerHTML= ''
    var answerMath = Math.floor(Math.random() * 4) + 1 
    switch(answerMath){
    case 1: answer = 'YES'
    break;
    case 2: answer = 'NO'
    break;
    case 3: answer = 'MAYBE'
    break;
    case 4: answer = 'I DONT KNOW'
    break;
    }
    var question = document.querySelector("#texto").value
    var filter= setInterval(function(){
    ball.style.filter = `hue-rotate(${Math.floor(Math.random() * 360) + -360}deg)`
    },100)
    setTimeout(function(){clearInterval(filter)},2000)
    document.querySelector("body > p").innerHTML= `${question}?`
    document.querySelector("#texto").value=''
    setTimeout(function(){
        finalanswer.innerHTML = `${answer}`
        finalanswer.animate([{ opacity: 0.1, easing: 'ease-in' },{ opacity: 1 }],2000);
    }, 3000)
}

