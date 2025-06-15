// Script principal para navegación y menú responsive
document.addEventListener('DOMContentLoaded', function () {
    // Sidebar lateral
    const sidebar = document.querySelector('.sidebar-menu');
    // Todos los enlaces del sidebar
    const links = document.querySelectorAll('.sidebar-link');
    // Todas las secciones principales
    const sections = document.querySelectorAll('.page-section');

    // Al hacer click en un enlace del sidebar, cierra el hover y el ancho
    links.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.classList.remove('hover', 'focus-within');
            sidebar.style.width = '';
        });
    });

    // Navegación entre secciones (sidebar)
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            // Oculta todas las secciones
            sections.forEach(sec => sec.style.display = 'none');
            // Muestra la sección correspondiente
            const showSection = document.getElementById(target);
            if (showSection) showSection.style.display = 'block';

            // Marca el enlace como activo
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Quita el foco del sidebar
            if (sidebar) sidebar.blur();
            if (document.activeElement) document.activeElement.blur();
        });
    });

    // Menú móvil
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileBtn && mobileNav) {
        // Abre/cierra el menú móvil
        mobileBtn.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });
        // Navegación entre secciones (móvil)
        mobileLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Oculta todas las secciones
                document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
                // Muestra la sección correspondiente
                const target = this.getAttribute('href');
                document.querySelector(target).style.display = '';
                // Cierra el menú móvil
                document.querySelector('.mobile-nav').classList.remove('open');
            });
        });
        // Cierra el menú móvil al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!mobileNav.contains(e.target) && !mobileBtn.contains(e.target)) {
                mobileNav.classList.remove('open');
            }
        });
    }
});

