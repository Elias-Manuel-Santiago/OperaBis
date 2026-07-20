const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('nav_buttons');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    const isActive = navLinks.classList.toggle('active');
    hamburgerBtn.classList.toggle('active', isActive);
    overlay.classList.toggle('active', isActive);
    hamburgerBtn.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
}

hamburgerBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Cierra el menú al hacer clic en un enlace (útil en móviles)
navLinks.querySelectorAll('nav_button').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Cierra el menú si la ventana se agranda a tamaño de escritorio
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});
