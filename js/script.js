document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const sectionDisplay = document.getElementById('section-display');
    const menuLinks = document.querySelectorAll('.menu-link');
    let timeoutId;

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(closeMenu, 3000);
    });

    document.addEventListener('click', function (event) {
        if (!mobileMenu.classList.contains('hidden') && !menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            closeMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (!mobileMenu.classList.contains('hidden')) {
                closeMenu();
            }
        });
    });
});