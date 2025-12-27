
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.links a');

function closeMenu() {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('active');
}

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeMenu);

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});
