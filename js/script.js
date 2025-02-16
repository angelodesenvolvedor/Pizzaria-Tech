document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const sectionDisplay = document.getElementById('section-display');
    const menuLinks = document.querySelectorAll('.menu-link');
    const comprarButtons = document.querySelectorAll('.comprar-button');
    const mensagemCarrinho = document.getElementById('mensagem-carrinho');
    let timeoutId;
    let mensagemTimeoutId;

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }

    function mostrarMensagem(mensagem) {
        mensagemCarrinho.textContent = mensagem;
        mensagemCarrinho.classList.add('mostrar');

        if (mensagemTimeoutId) {
            clearTimeout(mensagemTimeoutId);
        }

        mensagemTimeoutId = setTimeout(esconderMensagem, 3000);
    }

    function esconderMensagem() {
        mensagemCarrinho.classList.remove('mostrar');
        mensagemCarrinho.textContent = '';
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

    comprarButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const produtoNome = this.parentNode.querySelector('h3').textContent;
            const produtoPreco = this.parentNode.querySelector('.font-bold').textContent;

            mostrarMensagem(`Produto: ${produtoNome}\n${produtoPreco}\nAdicionado ao carrinho!`);
        });
    });
});