// js/script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const sectionDisplay = document.getElementById('section-display');
    const menuLinks = document.querySelectorAll('.menu-link');
    let timeoutId;

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        timeoutId = null; 
    }

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(closeMenu, 3000);
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickInsideButton = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideButton && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const sectionName = this.dataset.section;
            sectionDisplay.textContent = `Você está em: ${sectionName}`;
        });
    });
});