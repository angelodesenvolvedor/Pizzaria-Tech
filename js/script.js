document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
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
});