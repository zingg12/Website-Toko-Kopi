// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//when hamburger menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}
// click outside sidebar to hidden nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    } 
})
