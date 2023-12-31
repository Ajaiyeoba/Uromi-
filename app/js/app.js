const hamBtn = document.querySelector('#hamBtn');
const header = document.querySelector('.header')
hamBtn.addEventListener('click',function() { 
    console.log('clicked Hamburger');

    if (header.classList.contains('open')) {
        header.classList.remove('open');
    } else {
    header.classList.add('open');
    }
});