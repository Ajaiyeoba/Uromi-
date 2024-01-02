const hamBtn = document.querySelector('#hamBtn');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay');



hamBtn.addEventListener('click',function() { 
    console.log('clicked Hamburger');

    if (header.classList.contains('open')) {
        header.classList.remove('open'); // Closes Hamburger
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
     else{
    header.classList.add('open'); // opens hamburger
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    }
});