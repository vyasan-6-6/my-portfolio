document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile navigation toggle (simple overlay or toggle class)
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            // Basic mobile menu toggle logic:
            // Since we want to support mobile, we can toggle visibility on nav-links
            const isOpen = navLinks.style.display === 'flex';
            if (isOpen) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'hsl(222, 47%, 9%)';
                navLinks.style.padding = '1.5rem';
                navLinks.style.borderBottom = '1px solid var(--border-color)';
                navLinks.style.gap = '1.5rem';
            }
        });
    }

    // 3. Contact Form Submission & Client-Side Validation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get inputs
            const fullName = document.getElementById('fullName').value.trim();
            const emailAddress = document.getElementById('emailAddress').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation check
            if (!fullName || !emailAddress || !subject || !message) {
                showStatus('Please fill in all required fields.', 'error');
                return;
            }

            // Simple Email Regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailAddress)) {
                showStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission to server / email API
            showStatus('Sending message...', 'info');

            setTimeout(() => {
                showStatus('Message sent successfully! Thank you for connecting.', 'success');
                contactForm.reset();
            }, 1500);
        });
    }

    // Helper function to display messages to the user
    function showStatus(message, type) {
        if (!formStatus) return;

        formStatus.textContent = message;
        formStatus.className = 'form-status'; // Reset classes

        if (type === 'success') {
            formStatus.classList.add('success');
        } else if (type === 'error') {
            formStatus.classList.add('error');
        } else {
            // Loading/Info status styling
            formStatus.style.display = 'block';
            formStatus.style.background = 'rgba(99, 102, 241, 0.1)';
            formStatus.style.border = '1px dashed var(--accent)';
            formStatus.style.color = 'var(--text-primary)';
        }
    }
});
