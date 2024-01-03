const hamBtn = document.querySelector('#hamBtn');
const body = document.querySelector('body');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay');
const fadeElem = document.querySelectorAll('.has-fade');

// Declarations 

hamBtn.addEventListener('click',function() { 
    console.log('clicked Hamburger');

    if (header.classList.contains('open')) {
        header.classList.remove('open'); // Closes Hamburger
        body.classList.remove('noscroll');
        fadeElem.forEach(function( element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        })

    }
     else{
    body.classList.add('noscroll');
    header.classList.add('open'); // opens hamburger
    fadeElem.forEach(function(element) {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
    })
    
    }
});