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
        details.style.display = "none";  // Hide if already visible
    } else {
        details.style.display = "block";  // Show if hidden
    }
}
