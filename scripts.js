// Asegúrate de enlazar este archivo en tu HTML antes de </body>
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar-menu');
    const links = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.page-section');

    links.forEach(link => {
        link.addEventListener('click', function () {
            // Solo en pantallas grandes el menú se expande con hover,
            // pero en móviles o si quieres forzar el cierre:
            sidebar.classList.remove('hover', 'focus-within');
            sidebar.style.width = ''; // Vuelve al ancho original
        });
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            sections.forEach(sec => sec.style.display = 'none');
            const showSection = document.getElementById(target);
            if (showSection) showSection.style.display = 'block';

            // Cambia la clase activa
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Quita el foco del sidebar para que se "encoga"
            if (sidebar) sidebar.blur();
            if (document.activeElement) document.activeElement.blur();
        });
    });

    // Menú móvil
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Oculta todas las secciones
                document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
                // Muestra la sección correspondiente
                const target = this.getAttribute('href');
                document.querySelector(target).style.display = '';
                // Opcional: cierra el menú móvil si es tipo drawer
                document.querySelector('.mobile-nav').classList.remove('open');
            });
        });
        document.addEventListener('click', function(e) {
            if (!mobileNav.contains(e.target) && !mobileBtn.contains(e.target)) {
                mobileNav.classList.remove('open');
            }
        });
    }
});
    
    