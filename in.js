const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Frontend Developer',
        'Tech Enthusiast',
        'Problem Solver'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    showCursor: true,
    cursorChar: '|'
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.about, .skills, .education, .contact, .project-card, .education-item, .education-item1').forEach(el => {
    observer.observe(el);
});