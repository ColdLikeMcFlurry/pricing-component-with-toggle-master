let bg = document.querySelector('.bg');
let circle = document.querySelector('.circle');
let switcher = document.querySelector('.switcher');
let cheap = document.querySelector('.cheap');
let high = document.querySelector('.high');
let higher = document.querySelector('.higher');

switcher.addEventListener('click', () =>{
    bg.classList.toggle('bg_active');
    circle.classList.toggle('active');
    if (bg.classList.contains('bg_active')) {
        cheap.innerHTML = '&dollar;19.99';
        high.innerHTML = '&dollar;24.99';
        higher.innerHTML = '&dollar;39.99';
    } else {
        cheap.innerHTML = '&dollar;199.99';
        high.innerHTML = '&dollar;249.99';
        higher.innerHTML = '&dollar;399.99';
    }
    
    
})


