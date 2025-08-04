const burger = document.getElementById('halalburger');
const nav = document.getElementById('navlinks');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('open');
});