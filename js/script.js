document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const sectionDisplay = document.getElementById('section-display');
    const menuLinks = document.querySelectorAll('.menu-link');
    let timeoutId;

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        timeoutId = null; // Limpa o ID do timeout
    }

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');

        // Limpa qualquer timeout existente
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Define um timeout para fechar o menu após 3 segundos (ajuste conforme necessário)
        timeoutId = setTimeout(closeMenu, 3000);
    });

    // Fecha o menu se o usuário clicar fora do menu e do botão
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickInsideButton = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideButton && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });

    // Vai diretamente para a seção com rolagem suave
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link (navegar)
            const targetId = this.getAttribute('href').substring(1); // Pega o ID do alvo (ex: "menu")
            const targetSection = document.getElementById(targetId); // Encontra a seção

            // Rola suavemente para a seção
            targetSection.scrollIntoView({ behavior: 'smooth' });

            if (!mobileMenu.classList.contains('hidden')) {
                closeMenu();
            }
        });
    });
});