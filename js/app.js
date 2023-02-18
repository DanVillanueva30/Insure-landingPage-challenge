document.addEventListener('DOMContentLoaded', function() {

    const hamburguer = document.querySelector('.mobile-menu-img');
    const cross = document.querySelector('.mobile-menu-img__cross');
    const nav = document.querySelector('.navigation');
    const body = this.documentElement.querySelector('BODY');
    hamburguer.addEventListener('click', mobileMenu);
    cross.addEventListener('click', mobileMenu);

    function mobileMenu() {
        if(nav.classList.contains('navigation__hidden')) {
            nav.classList.remove('navigation__hidden')
            hamburguer.classList.add('mobile-menu-img--hidden')
            cross.classList.remove('mobile-menu-img--hidden')
            body.classList.add('hidden')
        } else {
            nav.classList.add('navigation__hidden')
            hamburguer.classList.remove('mobile-menu-img--hidden')
            cross.classList.add('mobile-menu-img--hidden')
            body.classList.remove('hidden')
        }
    }

});