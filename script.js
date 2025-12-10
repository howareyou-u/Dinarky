// Script interactivo para Dinarky

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // MENÚ LATERAL
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('closeBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    console.log('Elementos del menú:', { sidebar, menuToggle, closeBtn, sidebarOverlay });

    // Abrir menú lateral
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Abriendo menú');
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
    }

    // Cerrar menú lateral
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Cerrando menú');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Cerrar menú al hacer clic en el overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            console.log('Overlay clickeado');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace del sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Enlace del menú clickeado');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    });

    // Animación suave del logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1) rotate(5deg)';
            logo.style.transition = 'all 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Efecto hover en tarjetas
    const cards = document.querySelectorAll('.server-card, .stat, .contacto-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });
    });

    // Botones principales
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');

    if (btnPrimary) {
        btnPrimary.addEventListener('click', () => {
            alert('¡Bienvenido a Dinarky! Para unirte, dirígete a nuestro Discord.');
        });
    }

    if (btnSecondary) {
        btnSecondary.addEventListener('click', () => {
            const rulesSection = document.getElementById('servidor');
            rulesSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Animación de entrada para secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInDown 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });

    // Efecto al hacer scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(212, 165, 116, 0.4)';
        } else {
            navbar.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.2)';
        }
    });

    // Efecto pulsante en el logo al cargar
    function pulseAnimation() {
        if (logo) {
            logo.style.textShadow = '0 0 20px rgba(255, 140, 0, 0.8)';
            setTimeout(() => {
                logo.style.textShadow = '0 0 10px rgba(255, 140, 0, 0.5)';
            }, 500);
        }
    }

    // Ejecutar animación del logo cada 3 segundos
    setInterval(pulseAnimation, 3000);

    // Contador animado para estadísticas
    const stats = document.querySelectorAll('.stat h4');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        let isAnimating = false;

        stat.addEventListener('mouseenter', () => {
            if (!isAnimating) {
                isAnimating = true;
                stat.style.animation = 'pulse 0.6s ease';
                setTimeout(() => {
                    isAnimating = false;
                }, 600);
            }
        });
    });

    console.log('¡Bienvenido a Dinarky - El Último Oasis!');
});

// Añadir estilo CSS para la animación pulse si no existe
if (!document.querySelector('style[data-pulse]')) {
    const style = document.createElement('style');
    style.setAttribute('data-pulse', 'true');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}
