document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => section.style.display = "none");

        const targetSection = document.getElementById(targetId);
        
        // Show the targeted section
        if (targetSection) {
            targetSection.style.display = "block";
        }
    }

    // Add click event listeners to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Show the first section by default
    showSection('our-history');
});

// For hightlighting active nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});