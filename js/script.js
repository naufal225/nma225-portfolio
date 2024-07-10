const menubar = document.querySelector('.menu');
const navbarresponsive = document.querySelector('.nav-bar-menu');
const navlink = document.querySelectorAll('.nav-bar-menu a.nav-link');

menubar.addEventListener('click', function(e) {
    navbarresponsive.classList.toggle('tampil');
} );

navlink.forEach(function(link) {
    link.addEventListener('click', function() {
        navbarresponsive.classList.remove('tampil');
    });
});