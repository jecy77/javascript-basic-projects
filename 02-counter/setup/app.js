const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');
let value = document.getElementById('value');

decreaseBtn.addEventListener('click', function(){
    newValue = parseInt(value.textContent) - 1;
    value.textContent = newValue;
    console.log(newValue);
    setColor();
})

increaseBtn.addEventListener('click', function(){
    newValue = parseInt(value.textContent) + 1;
    value.textContent = newValue;
    console.log(newValue);
    setColor();
})

resetBtn.addEventListener('click', function(){
    value.textContent = 0;
    setColor();
})

function setColor(){
    let count = parseInt(value.textContent);
    if(count == 0){
        value.style.color = "black";
    } else if(count < 0){
        value.style.color = "red";
    } else {
        value.style.color = "green";
    }
}
