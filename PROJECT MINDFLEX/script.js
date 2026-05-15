alert('WARNING: This website is a work in progress. Please expect some bugs and incomplete features. Thank you for your understanding!');

// Scroll reveal

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((e, i) => {

    if (e.isIntersecting) {

        setTimeout(() => e.target.classList.add('visible'), i * 80);

        observer.unobserve(e.target);

    }

    });

}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));



// Module card click → lesson preview

const moduleIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.querySelectorAll('.module-card').forEach((card, i) => {

    const id = moduleIds[i] ?? i + 1;

    card.addEventListener('click', () => {

    window.location.href = `lesson-preview.html?module=${id}`;

    });

});

