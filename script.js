const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle('toggle');
});
const animateSection = (section) => {
    section.classList.add('animate');
};
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSection(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});
document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionTop = targetSection.offsetTop;
            const windowHeight = window.innerHeight;
            const sectionHeight = targetSection.offsetHeight;

            const scrollPosition = sectionTop - headerHeight - (windowHeight - sectionHeight) / 2;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });

            animateSection(targetSection);
        }
    });
});

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    alert('تم إرسال رسالتك بنجاح!');
    contactForm.reset();
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.service-card').forEach(card => {
    cardObserver.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    const executorCard = document.querySelector('#executor-card-main');
    if (executorCard) {
        executorCard.addEventListener('click', function(e) {
            e.preventDefault();
            const powerfulFeaturesSection = document.querySelector('#executor-img-cards-section');
            if (powerfulFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = powerfulFeaturesSection.offsetTop;
                
                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }

    const executorNavLink = document.querySelector('#executor-nav-link');
    if (executorNavLink) {
        executorNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            const powerfulFeaturesSection = document.querySelector('#executor-img-cards-section');
            if (powerfulFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = powerfulFeaturesSection.offsetTop;

                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }

    const externalCard = document.querySelector('#external-card-main');
    if (externalCard) {
        externalCard.addEventListener('click', function(e) {
            e.preventDefault();
            const externalFeaturesSection = document.querySelector('#external-img-cards-section');
            if (externalFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = externalFeaturesSection.offsetTop;
                
                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }

    const externalNavLink = document.querySelector('#external-nav-link');
    if (externalNavLink) {
        externalNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            const externalFeaturesSection = document.querySelector('#external-img-cards-section');
            if (externalFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = externalFeaturesSection.offsetTop;

                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const homeNavLink = document.querySelector('#home-nav-link');
    if (homeNavLink) {
        homeNavLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        button.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cards-section .download-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});
