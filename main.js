'use strict'; 

document.addEventListener('DOMContentLoaded', () => {
  /*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  console.log(navMenu);

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('ri-close-large-fill');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.toggle('left-[0]');
      hamburger.classList.toggle('ri-close-large-line');
    });
  });

  /*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

  window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');

    if (window.scrollY >= 250) {
      scrollUp.classList.add('bottom-4');
      scrollUp.classList.remove('-bottom-1/2');
    } else {
      scrollUp.classList.remove('bottom-4');
      scrollUp.classList.add('-bottom-1/2');
    }
  });

  /*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

  window.addEventListener('scroll', () => {
    const headerEl = document.getElementById('navbar');

    if (window.scrollY >= 250) {
      headerEl.classList.add('border-b', 'border-[var(--color-heading)]', 'duration-300');
    } else {
      headerEl.classList.remove(
        'border-b',
        'border-yellow-500',
        'duration-300'
      );
    }
  });

  /*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
            pauseOnMouseEnter: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

  /*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');

      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  });

  /*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

  const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px',
    duration: '2500',
    delay: 300,
   // reset: true,
  });

  sr.reveal('.home-data, .about-heading, .popular-heading, .review-heading, .review-swiper, .footer-icon, .footer-content, .copyright');

  sr.reveal('.home-image', { delay: 500, scale: 0.5 });

  //SERVICE 
  sr.reveal('.service-card, .popular-card', { interval: 100 });

  /// ABOUT
  sr.reveal('.about-leaf', { delay: 1000, origin: 'right' });

  sr.reveal('.about-content , .about-image-2', { origin: 'right' });

  sr.reveal('.about-content-2 , .about-image', { origin: 'left' });


  /// REVIEW
  sr.reveal('.review-leaf, .footer-floral', { delay: 1000, origin: 'left' });



  /// Google Analytics Tracking FUnction

  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2ZTX1E1N36');

});
