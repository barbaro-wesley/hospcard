/**
* Template Name: Bootslander
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

document.addEventListener("DOMContentLoaded", () => {
  const menuOptions = document.getElementById("menu-options");
  const teamSection = document.getElementById("team-section");

  menuOptions.addEventListener("change", () => {
    const selectedOption = menuOptions.value;
    if (selectedOption) {
      teamSection.classList.remove("hidden");
    }
  });
});
const doctors = {
  clinico: [
    {
      name: "Ana Claudia M.Ferreira",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-1.jpg",*/
      social: {
        twitter: "https://twitter.com/drjoaosilva",
        facebook: "https://facebook.com/drjoaosilva",
        instagram: "https://instagram.com/drjoaosilva",
        linkedin: "https://linkedin.com/in/drjoaosilva",
      },
    },
    {
      name: "Divane Lodi",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    {
      name: "Carlos Seibel",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    
    {
      name: "Henrique Tessaro",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    
    {
      name: "Claudio Fernando Feltrin",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    {
      name: "Tiago Bordignon",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    {
      name: "Sissiane Escobar de Souza",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    {
      name: "Cassius Furtado",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    {
      name: "Jefferson Cunha",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    {
      name: "Egle André Pinto De Almeida",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      social: {
        twitter: "https://twitter.com/dramariaoliveira",
        facebook: "https://facebook.com/dramariaoliveira",
        instagram: "https://instagram.com/dramariaoliveira",
        linkedin: "https://linkedin.com/in/dramariaoliveira",
      },
    },
    
    
  ],
  neuro: [
    {
      name: "Giovanna Belo Sarturi",
      role: "Neurologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Paulo Mesquita Filho",
      role: "Neurologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Ricardo L.Bortoluz",
      role: "Neurologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
  ],
  cardio: [
    {
      name: "Pedro Ivo Bittencourt Santana",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Cristiane Seibel",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Cristiano Lorenzini Noskoski",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Heloisa D Agustin Poli",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Juan Nunes Pagnussat",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
    {
      name: "Juliana Noskoski",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      social: {
        twitter: "https://twitter.com/drcarlosmendes",
        facebook: "https://facebook.com/drcarlosmendes",
        instagram: "https://instagram.com/drcarlosmendes",
        linkedin: "https://linkedin.com/in/drcarlosmendes",
      },
    },
  ],
  Anestesista: [
    {
      name: "Olinto Adolfo Dos Santos",
      role: "Anestesista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Clinica Foresti",
      role: "Anestesista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  CirurgiaGeral: [
    {
      name: "Alvaro Gonçalves",
      role: "Cirurgia Geral",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Ana Carolina Carnieletto",
      role: "Cirurgia Geral",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Guilherme Garcia Vieira",
      role: "CirurgiaGeral",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Diego Mattioni Maturana",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Rafaela Lazzari Pietroski",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "José Maria Titto",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Matheo Casagrande",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Joao Isidro Fracasso",
      role: "Cirurgião Torácico",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "José Missio",
      role: "Cirurgia Vascular",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Jaber Salet",
      role: "Cirurgia Vascular",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Henrique Biavatti",
      role: "Cirurgia Plastica",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Tomas Bergonsi",
      role: "Cirurgia Plastica",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Cleiton Vitoria Alan",
      role: "Cirurgia Plastica",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    
  ],
  Estetica:[
    {
      name: "La Aser Depilação e Estetica",
      role: "Depilação e Estetica",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Liberty Laser",
      role: "Estetica,Saúde e Emagrecimento",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },

  ],
  Dentista:[
    {
      name: "Clinica Denvita-Dra Esther Zanin",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Clinica Denvita-Dr Ademar Waskievicz",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Clinica Douglas Tibola",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Odontocell-Dra Thais Cristiane Tosati",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Dental Med",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Debora Ferlin",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Dual Odontologia Estetica",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
      
    },
    {
      name: "CP Ondontologia Estética",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Denzato Odontologia",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },

  ],
  Demartologista:[
    {
      name: "Camila Coutinho",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Adines Nardi",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Giovana Binda",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Jonathan Pressoto",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Odair Nardi",
      role: "Medicina Estetica",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Endocrinologista:[
    {
      name: "João Batista Ben",
      role: "Endocrinologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Juan Nunes Pagnussat",
      role: "Endocrinologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Karina Rucker",
      role: "Endocrinologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Fonoaudiologa:[
    {
      name: "Anaeli Rossato",
      role: "Fonoaudiologa",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },    
    {
      name: "Leticia Korb",
      role: "Fonoaudiologa",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Thais Dagostin",
      role: "Fonoaudiologa",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Fisioterapia:[
    {
      name: "Evolue Fisioterapia ",
      role: "Convencional,Neurológica,Domiciliar,Pilates",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },    
    {
      name: "Naissa Soares ",
      role: "Fisioterapia domiciliar,Ambulatorio",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Angela Ganzer Gazola",
      role: "Pilates, Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Thais Zanuzzo",
      role: "Fisioterapia e MicroFisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Trattare Clinica de Fisioterapia",
      role: "Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Fisio Derm Clinica de Fisioterapia",
      role: "Pilates, Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Fisioartty Fisioterapia",
      role: "Pilates, Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Gabriela Durante Fisioterapia Ortopédica e quiropraxia",
      role: "Pilates, Fisioterapia, quiropraxia",
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  GO:[
    {
      name: "Lilian Opelt Donin",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },    
    {
      name: "Ana Corolina Brocco",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Alessandro Luis Reginato",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Cristiane Faccio",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Francisco Itiel Romero",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Leandro Bortolon",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Hilda Cerato",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Silvane Rigo",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Everaldo Manoel Tonato",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Juliana Lorenzini Noskoski",
      role:"Ginecologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  GastroEnterologista:[
    {
      name: "Diego Mattioni Maturana",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Rafaela Lazzari Pietroski",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Matheo Casagrande",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Milton Bergamo",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "José Maria Tito",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Hematologista:[
    {
      name: "Willian Scheffer Chaves",
      role: "Hematologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Mastologista:[
    {
      name: "Liege Graebin",
      role: "Mastologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Nutricionista:[
    {
      name: "Ana Daniela Carnieletto",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Luana Xavier",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Monica Cuchi",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Clinica Equilibrio",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Angela Maria Berton",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Cristiane Leal Scortegagna",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Júlia Rigo",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Thaiyna Scortegagna De Morais",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    
  ],
  Nefrologista:[
    {
      name: "Giovanna Bello Sarturi",
      role: "Nefrologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Oftamologista:[
    {
      name: "Byanca Foresti",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Manfron",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Werner Holderied",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Thaise Federizzi",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    
  ],
  otorrinolaringologista:[
    {
      name: "Erik Xavier da Silva Pinto",
      role: "Otorrinolaringologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Tatiani Yamamoto",
      role: "Otorrinolaringologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Mariele Bressan",
      role: "Otorrinolaringologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    
  ],
  Pediatra:[
    {
      name: "Dyamas Alberto Biasi",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Kelen Cristine Federizzi",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Marcio Carnieletto",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Amanda Sandri",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Thiago Bonfanti",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Edson M da Fontoura",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Psiquiatra:[
    {
      name: "Ricardo Bicca",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Carlos Eduardo R Gavioli",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Eduardo N. Mello Filho",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Luciane Miozzo",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Thiago Bonfanti",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Edson M da Fontoura",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Pneumologista:[
    {
      name: "Rafael Cadore",
      role: "Pneumologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "Vitor Hugo Souza Santos",
      role: "Pneumologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "João Isidro Fracasso",
      role: "Pneumologista",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ],
  Psicologia:[
    {
      name: "AUGUSTO BEBBER MARRONI",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "ALINE BASSO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "DAIANE PRADEGAN ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "ELIANE MARIA BIFFE ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "EDIMARA ANA PAGOTO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "NATIELI BERGAMASCHI ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "THANISE FERNANDES ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "FRANCIELI SOTILLE BRUGNERA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "CLÍNICA FLOWRESCER  ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "CLÍNICA EQUILÍBRIO  ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "ANA PAULA DEON  LIFE CLIN",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "ANA PAULA DEON  LIFE CLIN",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "KARINE ALBERTI DE OLIVEIRA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MEIRE TOMASI",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MARIA LUISA GUZELA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "LILIAN STOLFO MACULAN RETTORE ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MATIELE PEREIRA PACHECO",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MAYARA LARICE DE SOUSA OLIVEIRA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "NATACHA LIANA GATTO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MARCELLE CALDEIRA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "ANDRESSA ROCHA TIBOLLA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "CARLA J. STUMPF",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "JOSSANDRA BELUSSO",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "ALANA BRANDELERO PORTO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "RAQUEL VIRGINIA MOREIRA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "CASSIA BONAMIGO DA COSTA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
   
  ],
  Podologa:[
    {
      name: "ISELDA MORSOLIN FERREIRA ",
      role: " Podologa",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "JOZIELI MARIANO",
      role: "Podologa",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "SIMONE MONTUANI",
      role: "Podologa",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ], 
  Reumatologista:[
    {
      name: "ANDERSON NAPP ROCHA ",
      role: "REUMATOLOGISTA ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
  ], 
  Traumato:[
    {
      name: "AUGUSTO ALVES BADOTTI ",
      role: "TRAUM / COLUNA",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "DIEGO COLLARES  ",
      role: "TRAUM / COLUNA",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "EDER MENEGASSI MARTEL",
      role: "TRAUM / OMBRO COTOV",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "LUCAS SCHIRMER MARTINS",
      role: "TRAUM/ MÃO E PUNHO",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MARCIO MEZZOMO",
      role: "TRAUMATO / JOELHO ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MARIO AUGUSTO DIAS",
      role: "TRAUM / JOELHO",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MATEUS BREITENBACH SCHERER",
      role: "TRAUM/ PÉS / TORNOZELO",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "BRUNO ROSS ",
      role: "TRAUM/ QUADRIL",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "MARCELO CAMARGO DE ASSIS ",
      role: "TRAUM/ ORTOP PEDIÁ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    {
      name: "JULIANO DOS SANTOS SUZIN ",
      role: "TRAUM/ PÉS / TORNOZELO ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    },
    
  ],
  Urologista:[
    {
      name: "HENRIQUE ULGUIM PERIN ",
      role: "Urologista ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    }, 
    {
      name: "RODRIGO BALOTIN",
      role: "Urologista ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    }, 
    {
      name: "MARCELO G JUSTOS (PREVENCARDIO)",
      role: "Urologista ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    }, 
      
  ],
  Analisesclinicas:[
    {
      name: "HCR LAB  ",
      role: "Urologista ",
      /*image: "assets/img/team/team-5.jpg",*/
      social: {
        twitter: "https://twitter.com/drricardolopes",
        facebook: "https://facebook.com/drricardolopes",
        instagram: "https://instagram.com/drricardolopes",
        linkedin: "https://linkedin.com/in/drricardolopes",
      },
    }, 
      
  ]
};


document.getElementById("menu-options").addEventListener("change", (event) => {
  const selectedSpecialty = event.target.value;
  const teamSection = document.getElementById("team-section");
  const teamRow = document.getElementById("team-row");

  // Limpar os cards antigos
  teamRow.innerHTML = "";

  if (selectedSpecialty && doctors[selectedSpecialty]) {
    // Criar novos cards
    doctors[selectedSpecialty].forEach((doctor) => {
      const member = document.createElement("div");
      member.className = "col-lg-4 col-md-6";
      member.innerHTML = `
        <div class="member">
          <div class="pic">
            <img src="${doctor.image}" class="img-fluid" alt="${doctor.name}">
          </div>
          <div class="member-info">
            <h4>${doctor.name}</h4>
            <span>${doctor.role}</span>
            <div class="social">
              <a href="${doctor.social.twitter}" target="_blank"><i class="bi bi-twitter"></i></a>
              <a href="${doctor.social.facebook}" target="_blank"><i class="bi bi-facebook"></i></a>
              <a href="${doctor.social.instagram}" target="_blank"><i class="bi bi-instagram"></i></a>
              <a href="${doctor.social.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      `;
      teamRow.appendChild(member);
    });

    // Mostrar a seção de equipe
    teamSection.classList.remove("hidden");
  } else {
    teamSection.classList.add("hidden");
  }
});

