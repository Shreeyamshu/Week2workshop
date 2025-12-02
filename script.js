// Mobile Menu Toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // Toggle the CSS class (controls visibility via CSS)
    navLinks.classList.toggle('open');
    
    // Update the button text/icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger
}

// Add the event handler
menuButton.addEventListener('click', toggleMenu);

// Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu(); // Closes the menu
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        // Stop the browser from submitting the form and refreshing the page
        event.preventDefault();
        
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();
        
        if (nameInput === '' || emailInput === '' || messageInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            // Successful mock submission
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = '#4CAF50';
            contactForm.reset(); // Clear the form fields
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll progress indicator (Optional)
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.backgroundColor = '#4CAF50';
progressBar.style.width = '0%';
progressBar.style.zIndex = '1000';
progressBar.style.transition = 'width 0.3s ease';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset;
    const progress = (scrollTop / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
});