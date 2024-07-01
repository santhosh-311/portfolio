// script.js

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
        strings: ['Web Developer', '&amp; Python Developer.'],
        typeSpeed: 70,
    });
});

var tablinks=document.getElementsByClassName("about-tab-links")
var tabcontents=document.getElementsByClassName("about-tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('about-active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('about-active-tab');
    }
    document.getElementById(tabname+"1").classList.add('about-active-link');
    document.getElementById(tabname).classList.add('about-active-tab');
}

function menu(op){
    if (op=='open'){
        document.getElementById('menubar').style.display='flex';
    }
    else{
        document.getElementById('menubar').style.display='none'
    }
}