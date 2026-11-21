/* =========================================================
   MENU MOBILE
========================================================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* =========================================================
   HEADER AU SCROLL
========================================================= */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* =========================================================
   ANIMATIONS AU DÉFILEMENT (Intersection Observer)
========================================================= */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

/* =========================================================
   GESTION DU FORMULAIRE
========================================================= */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulation d'envoi (à remplacer par un vrai backend)
    formMessage.textContent = 'Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.';
    formMessage.classList.add('success');

    contactForm.reset();

    setTimeout(() => {
        formMessage.classList.remove('success');
        formMessage.textContent = '';
    }, 5000);
});