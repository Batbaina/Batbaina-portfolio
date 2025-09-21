
        // Language switching functionality - Define globally
        let currentLanguage = 'en';
        
        // Define switchLanguage function globally
        window.switchLanguage = function(lang) {
    currentLanguage = lang;
    
    // Update select value
    const langSelect = document.querySelector('.lang-select');
    if (langSelect) {
        langSelect.value = lang;
    }
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = lang === 'en' ? 'data-en' : 'data-fr';
        const text = element.getAttribute(key);
        if (text) {
            if (element.children.length > 0) {
                const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
                if (textNodes.length > 0) {
                    textNodes[0].textContent = text;
                }
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const enText = link.getAttribute('data-en');
        const frText = link.getAttribute('data-fr');
        if (enText && frText) {
            link.textContent = lang === 'en' ? enText : frText;
        }
    });
    
    // Update button spans specifically
    document.querySelectorAll('.btn span[data-en]').forEach(span => {
        const enText = span.getAttribute('data-en');
        const frText = span.getAttribute('data-fr');
        if (enText && frText) {
            span.textContent = lang === 'en' ? enText : frText;
        }
    });
    
    // Update skill category titles
    document.querySelectorAll('.skill-category h3 span[data-en]').forEach(span => {
        const enText = span.getAttribute('data-en');
        const frText = span.getAttribute('data-fr');
        if (enText && frText) {
            span.textContent = lang === 'en' ? enText : frText;
        }
    });
};
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Load saved language preference (disabled for artifact)
            // const savedLang = localStorage.getItem('preferredLanguage') || 'en';
            // if (savedLang !== 'en') {
            //     switchLanguage(savedLang);
            // }
        });

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

        // Fade in animation on scroll
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

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle (if needed)
        const mobileMenuToggle = () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        };

        // Add some interactive hover effects
        document.querySelectorAll('.project-card, .skill-category, .contact-item').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Typing effect for hero subtitle (optional enhancement)
        const subtitle = document.querySelector('.hero h2');
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1500);

        // Add dynamic background particles (subtle effect)
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 215, 0, 0.3);
                border-radius: 50%;
                pointer-events: none;
                animation: float 6s linear infinite;
                top: 100vh;
                left: ${Math.random() * 100}vw;
            `;
            
            const floatKeyframes = `
                @keyframes float {
                    to {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            
            if (!document.querySelector('#particle-styles')) {
                const style = document.createElement('style');
                style.id = 'particle-styles';
                style.textContent = floatKeyframes;
                document.head.appendChild(style);
            }
            
            document.querySelector('.hero').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        };

        // Create particles periodically
        setInterval(createParticle, 2000);

  function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});