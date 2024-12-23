let list = document.querySelector('.slide .list');
let items = document.querySelectorAll('.slide .list .item');
let dots = document.querySelectorAll('.slide .dots li');
let prev = document.getElementById('pre');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if (active + 1 > lengthItems)
    {
        active = 0;
    }
    else 
    {
        active += 1;
    }
    reloadSlider(); 
}

prev.onclick = function(){
    if (active - 1 < 0)
    {
        active = lengthItems;
    }
    else 
    {
        active -= 1;
    }
    reloadSlider();
}

let refreshSlide = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');

    dots[active].classList.add('active');
    clearInterval(refreshSlide);
    refreshSlide = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((list, key) => {
    list.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})