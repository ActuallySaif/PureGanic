let overBtn1 = document.getElementById("overBtn1");
let overBtn2 = document.getElementById("overBtn2");
let overBtn3 = document.getElementById("overBtn3");
let overBtn4 = document.getElementById("overBtn4");
let decreaseBtn = document.getElementById("decrease");
let increaseBtn = document.getElementById("increase");
let count;

overBtn1.addEventListener('click', () => {

    overBtn1.style.width = '0'
    overBtn1.innerHTML = ""
    overBtn1.style.opacity = '0'

});

overBtn2.addEventListener('click', () => {

    overBtn2.style.width = '0'
    overBtn2.innerHTML = ""
    overBtn2.style.opacity = '0'

});

overBtn3.addEventListener('click', () => {

    overBtn3.style.width = '0'
    overBtn3.innerHTML = ""
    overBtn3.style.opacity = '0'

});

overBtn4.addEventListener('click', () => {

    overBtn4.style.width = '0'
    overBtn4.innerHTML = ""
    overBtn4.style.opacity = '0'

});

function decrease(numId) {

count = document.getElementById(numId).innerHTML;
count--
document.getElementById(numId).innerHTML = count



}

function increase(numId) {

count = document.getElementById(numId).innerHTML;
count++
document.getElementById(numId).innerHTML = count

}
