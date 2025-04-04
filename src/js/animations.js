let themeInitialized = false;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    if (!themeInitialized) {
        // Initialize all components
        initializeTheme();
        initializeParticles();
        initializeScrolling();
        initializeAOS();
        themeInitialized = true;
        console.log('Components initialized');
    }
});

function initializeTheme() {
    const themeSwitch = document.getElementById('theme-switch');
    
    if (!themeSwitch) {
        console.error('Theme switch button not found');
        return;
    }
    
    const icon = themeSwitch.querySelector('i');
    if (!icon) {
        console.error('Theme switch icon not found');
        return;
    }

    // Remove any existing click listeners
    themeSwitch.replaceWith(themeSwitch.cloneNode(true));
    const newThemeSwitch = document.getElementById('theme-switch');

    // Get saved theme or use light as default
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, newThemeSwitch.querySelector('i'));
    console.log('Theme initialized:', savedTheme);

    // Handle theme toggle
    newThemeSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, newThemeSwitch.querySelector('i'));
        
        // Update particles if they exist
        if (window.pJSDom && window.pJSDom[0]) {
            updateParticlesColor(newTheme);
        }
        
        console.log('Theme changed to:', newTheme);
    });
}

function updateThemeIcon(theme, icon) {
    if (!icon) return;
    
    // Remove all existing classes
    icon.className = '';
    
    // Add the new classes
    if (theme === 'light') {
        icon.classList.add('fas', 'fa-moon');
    } else {
        icon.classList.add('fas', 'fa-sun');
    }
}

function updateParticlesColor(theme) {
    const color = theme === 'light' ? '#2563eb' : '#60a5fa';
    if (window.pJSDom && window.pJSDom[0]) {
        const particles = window.pJSDom[0].pJS.particles;
        particles.color.value = color;
        particles.line_linked.color = color;
        window.pJSDom[0].pJS.particles.move.enable = false;
        window.pJSDom[0].pJS.fn.particlesEmpty();
        window.pJSDom[0].pJS.fn.particlesCreate();
        window.pJSDom[0].pJS.particles.move.enable = true;
    }
}

function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    }
}

function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        const currentTheme = document.documentElement.dataset.theme || 'light';
        particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: currentTheme === 'light' ? '#2563eb' : '#60a5fa'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: currentTheme === 'light' ? '#2563eb' : '#60a5fa',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
            retina_detect: true
        });
    }
}

function initializeScrolling() {
    // Smooth scroll for navigation links
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

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    if (sections.length === 0) return;

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}
