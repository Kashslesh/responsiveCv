'use strict';
//=============== declaration des variables=========================
const tabs = document.querySelectorAll('.nav__link');
const startIntersection = document.querySelector('.home__container');
const scrollTop = document.getElementById('scroll-top');

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    };
};
showMenu('nav-toggle','nav-menu');

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*==================== REMOVE MENU MOBILE ====================*/
document.querySelector('.nav__list').addEventListener('click', function(e){
    e.preventDefault();
    const navMenu = document.getElementById('nav-menu')
    
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');

        const clicked = e.target.closest('.nav__link');

        document.querySelector(id).scrollIntoView();
        navMenu.classList.remove('show-menu');
        
         // guard clause
        if(!clicked) return;

        // Remove active classes
        tabs.forEach(tab => tab.classList.remove('active-link'));
        // Activate tab
        clicked.classList.add('active-link');
    };
});


/*==================== SHOW SCROLL TOP ====================*/ 

const styckyArrow = function(entries){
    const [entry] = entries;
    
    if(!entry.isIntersecting) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
  }

const startObserver = new IntersectionObserver(styckyArrow,{
    root:null,
    threshold:.65,
})
startObserver.observe(startIntersection);