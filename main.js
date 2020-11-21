let rocket = document.getElementById('rocket-img');
let rocket1 = document.getElementById('rocket-img2');
let planet2 = document.getElementById('planet2');
let ellipce3 = document.getElementById('ellipce3');
let background = document.getElementById('background-bottom')
let background1 = document.getElementById('background-bottom2')
let div1 = document.getElementById('text-main-frame')
rocket.onclick = () => {
    rocket.style.opacity = '0'
    rocket1.style.opacity = '1'
    rocket1.style.height = '561px';
    rocket1.style.left = '991px';
    rocket1.style.top = '-20px';
    planet2.style.top = '400px'
    ellipce3.style.top = '400px'
    background.style.opacity = '0'
    background1.style.opacity = '1'
    background1.style.left = '-1px';
    background1.style.top = '4px'
    div1.style.opacity = '1'
}

