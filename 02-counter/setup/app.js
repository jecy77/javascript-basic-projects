// const decreaseBtn = document.querySelector('.decrease-btn');
// const resetBtn = document.querySelector('.reset-btn');
// const increaseBtn = document.querySelector('.increase-btn');
// let value = document.getElementById('value');

// decreaseBtn.addEventListener('click', function(){
//     let newValue = parseInt(value.textContent) - 1;
//     value.textContent = newValue;
//     console.log(newValue);
//     setColor();
// })

// increaseBtn.addEventListener('click', function(){
//     let newValue = parseInt(value.textContent) + 1;
//     value.textContent = newValue;
//     console.log(newValue);
//     setColor();
// })

// resetBtn.addEventListener('click', function(){
//     value.textContent = 0;
//     setColor();
// })

// function setColor(){
//     let count = parseInt(value.textContent);
//     if(count == 0){
//         value.style.color = "black";
//     } else if(count < 0){
//         value.style.color = "red";
//     } else {
//         value.style.color = "green";
//     }
// }

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        const action = btn.getAttribute('data-action');
        switch (action) {
            case 'decrease':
                value.textContent = parseInt(value.textContent) - 1;
                break;
            case 'increase':
                value.textContent = parseInt(value.textContent) + 1;
                break;
            case 'reset':
                value.textContent = 0;
                break;
        }
        setColor();
        console.log(value.textContent); // 현재 값 로깅
    });
});

function setColor() {
    const count = parseInt(value.textContent);
    if (count === 0) {
        value.style.color = "black";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "green";
    }
}
