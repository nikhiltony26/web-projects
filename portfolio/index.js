let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick =() => {
 menu.classList.toggle('bx-x');
 navbar.classList.toggle('.active');
};

const sr = ScrollReveal ({
 distance:'90px',
 duration: 2800,
 reset: true
})

sr.reveal('.text-box,.social,.logo,.btn1,.btn,.navbar',{delay:300,origin:'right'})
sr.reveal('.text-box,.social,.btn1,.btn,.container',{delay:100,origin:'left'})
sr.reveal('.social',{delay:300,origin:'bottom'})
sr.reveal('.social',{delay:100,origin:'top'});
