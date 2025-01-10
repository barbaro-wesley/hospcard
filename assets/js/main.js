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
      name: "Divane Lodi",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "(54) 99105-0664",
    },
    {
      name: "Carlos Seibel",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "(54) 3342-6808",
    },
    
    {
      name: "Henrique Tessaro",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "(54) 3342-9414",
    },
    
    {
      name: "Claudio Fernando Feltrin",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Tiago Bordignon",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: " 3347-2425",
    },
    {
      name: "Sissiane Escobar de Souza",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "3347-2425",
    },
    {
      name: "Jefferson Cunha",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "(54) 3175-0095",
    },
    {
      name: "GABRIEL SELLA",
      role: "Clínico Geral",
      /*image: "assets/img/team/team-2.jpg",*/
      phone: "(54) 3342-9414",
    },
    
    
  ],
  neuro: [
    {
      name: "Giovanna Belo Sarturi",
      role: "Neurologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Paulo Mesquita Filho",
      role: "Neurologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Ricardo L.Bortoluz",
      role: "Neurologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-9414",
    },
  ],
  cardio: [
    {
      name: "Pedro Ivo Bittencourt Santana",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Cristiane Seibel",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-6808",
    },
    {
      name: "Cristiano Lorenzini Noskoski",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-0674",
    },
    {
      name: "Heloisa D Agustin Poli",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-3455",
    },
    {
      name: "Juan Nunes Pagnussat",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Juliana Noskoski",
      role: "Cardiologista",
      /*image: "assets/img/team/team-3.jpg",*/
      phone: "(54) 3342-2022",
    },
  ],
  Anestesista: [
    {
      name: "Olinto Adolfo Dos Santos",
      role: "Anestesista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99168-7255",
    },
    {
      name: "Clinica Foresti",
      role: "Anestesista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9165-7995",
    },
  ],
  CirurgiaGeral: [
    {
      name: "Alvaro Gonçalves",
      role: "Cirurgia Geral",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Ana Carolina Carnieletto",
      role: "Cirurgia Geral",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-6368",
    },
    {
      name: "Guilherme Garcia Vieira",
      role: "CirurgiaGeral",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Diego Mattioni Maturana",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Rafaela Lazzari Pietroski",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "José Maria Titto",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Matheo Casagrande",
      role: "CirurgiaGeral / AP Digestivo",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99269-8006",
    },
    {
      name: "Joao Isidro Fracasso",
      role: "Cirurgião Torácico",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "José Missio",
      role: "Cirurgia Vascular",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(11) 98888-8888",
    },
    {
      name: "Jaber Salet",
      role: "Cirurgia Vascular",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "Henrique Biavatti",
      role: "Cirurgia Plastica",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 98403-0808",
    },
    {
      name: "Tomas Bergonsi",
      role: "Cirurgia Plastica",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-1729",
    },
    {
      name: "Cleiton Vitoria Alan",
      role: "Cirurgia Plastica",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-3756",
    },
    
  ],
  Estetica:[
    {
      name: "La Aser Depilação e Estetica",
      role: "Depilação e Estetica",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 99183-8347",
    },
    {
      name: "Liberty Laser",
      role: "Estetica,Saúde e Emagrecimento",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 99371-0425",
    },

  ],
  Dentista:[
    {
      name: "Clinica Denvita-Dra Esther Zanin",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9890",
    },
    {
      name: "Clinica Denvita-Dr Ademar Waskievicz",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9890",
    },
    {
      name: "Clinica Douglas Tibola",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 3342-8328",
    },
    {
      name: "Odontocell-Dra Thais Cristiane Tosati",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "5499143-4458",
    },
    {
      name: "Dental Med",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-1967",
    },
    {
      name: "Debora Ferlin",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 3342-3118",
    },
    {
      name: "Dual Odontologia Estetica",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(11) 98888-8888",
      
    },
    {
      name: "CP Ondontologia Estética",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: " 54 99233-8215",
    },
    {
      name: "Denzato Odontologia",
      role: "Dentista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99994-9080",
    },

  ],
  Demartologista:[
    {
      name: "Camila Coutinho",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 98418-7813",
    },
    {
      name: "Adines Nardi",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-3756",
    },
    {
      name: "Giovana Binda",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)98414-9981",
    },
    {
      name: "Jonathan Pressoto",
      role: "Demartologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2022",
    },
    {
      name: "Odair Nardi",
      role: "Medicina Estetica",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-3756",
    },
  ],
  Endocrinologista:[
    {
      name: "João Batista Ben",
      role: "Endocrinologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-3057",
    },
    {
      name: "Juan Nunes Pagnussat",
      role: "Endocrinologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Karina Rucker",
      role: "Endocrinologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2022",
    },
  ],
  Fonoaudiologa:[
    {
      name: "Anaeli Rossato",
      role: "Fonoaudiologa",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 99940-6101",
    },    
    {
      name: "Leticia Korb",
      role: "Fonoaudiologa",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "47 9152-6130",
    },
    {
      name: "Thais Dagostin",
      role: "Fonoaudiologa",
      phone: "9100-5471",
    },
  ],
  Fisioterapia:[
    {
      name: "Evolue Fisioterapia ",
      role: "Convencional,Neurológica,Domiciliar,Pilates",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54996450484",
    },    
    {
      name: "Naissa Soares ",
      role: "Fisioterapia domiciliar,Ambulatorio",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "9153-0076",
    },
    {
      name: "Angela Ganzer Gazola",
      role: "Pilates, Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 999550485",
    },
    {
      name: "Thais Zanuzzo",
      role: "Fisioterapia e MicroFisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "9164-1840",
    },
    {
      name: "Trattare Clinica de Fisioterapia",
      role: "Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-0999",
    },
    {
      name: "Fisio Derm Clinica de Fisioterapia",
      role: "Pilates, Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 3342-2936",
    },
    {
      name: "Fisioartty Fisioterapia",
      role: "Pilates, Fisioterapia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "54 9998-0509",
    },
    {
      name: "Gabriela Durante Fisioterapia Ortopédica e quiropraxia",
      role: "Pilates, Fisioterapia, quiropraxia",
      phone: "98422-1849",
    },
  ],
  GO:[
    {
      name: "Lilian Opelt Donin",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)3342-3269",
    },    
    {
      name: "Ana Corolina Brocco",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)99628-5836",
    },
    {
      name: "Alessandro Luis Reginato",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-3756",
    },
    {
      name: "Cristiane Faccio",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-4477",
    },
    {
      name: "Francisco Itiel Romero",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Leandro Bortolon",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-1743",
    },
    {
      name: "Hilda Cerato",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(11) 98888-8888",
    },
    {
      name: "Silvane Rigo",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-1590",
    },
    {
      name: "Everaldo Manoel Tonato",
      role:"Ginecologista e Obstetricia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-8179",
    },
    {
      name: "Juliana Lorenzini Noskoski",
      role:"Ginecologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2022",
    },
  ],
  GastroEnterologista:[
    {
      name: "Diego Mattioni Maturana",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Rafaela Lazzari Pietroski",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Matheo Casagrande",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99269-8006",
    },
    {
      name: "Milton Bergamo",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99269-8006",
    },
    {
      name: "José Maria Tito",
      role: "GastroEnterologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9499",
    },
  ],
  Hematologista:[
    {
      name: "Willian Scheffer Chaves",
      role: "Hematologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
  ],
  Mastologista:[
    {
      name: "Liege Graebin",
      role: "Mastologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
  ],
  Nutricionista:[
    {
      name: "Ana Daniela Carnieletto",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-6368",
    },
    {
      name: "Luana Xavier",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9907-6366",
    },
    {
      name: "Monica Cuchi",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2483",
    },
    {
      name: "Clinica Equilibrio",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-6974",
    },
    {
      name: "Angela Maria Berton",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99148-4807",
    },
    {
      name: "Cristiane Leal Scortegagna",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 996734180",
    },
    {
      name: "Júlia Rigo",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 991479082",
    },
    {
      name: "Thaiyna Scortegagna De Morais",
      role: "Nutricionista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99647-9956",
    },
    
  ],
  Nefrologista:[
    {
      name: "Giovanna Bello Sarturi",
      role: "Nefrologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
  ],
  Oftamologista:[
    {
      name: "Byanca Foresti",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99129-7990",
    },
    {
      name: "Manfron",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99238-6116",
    },
    {
      name: "Werner Holderied",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2603 ",
    },
    {
      name: "Thaise Federizzi",
      role: "Oftamologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-0713",
    },
    
  ],
  otorrinolaringologista:[
    {
      name: "Erik Xavier da Silva Pinto",
      role: "Otorrinolaringologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)3342-1565",
    },
    {
      name: "Tatiani Yamamoto",
      role: "Otorrinolaringologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 93505-9404",
    },
    {
      name: "Mariele Bressan",
      role: "Otorrinolaringologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    
  ],
  Pediatra:[
    {
      name: "Dyamas Alberto Biasi",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)3342-9414",
    },
    {
      name: "Kelen Cristine Federizzi",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-0713",
    },
    {
      name: "Marcio Carnieletto",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-6368",
    },
    {
      name: "Amanda Sandri",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99253-0943",
    },
    {
      name: "Thiago Bonfanti",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-6923",
    },
    {
      name: "Edson M da Fontoura",
      role: "Pediatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)3342-2828",
    },
  ],
  Psiquiatra:[
    {
      name: "Ricardo Bicca",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Carlos Eduardo R Gavioli",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-5294",
    },
    {
      name: "Eduardo N. Mello Filho",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 8411-5294",
    },
    {
      name: "Luciane Miozzo",
      role: "Psiquiatra",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2022",
    }
  ],
  Pneumologista:[
    {
      name: "Rafael Cadore",
      role: "Pneumologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "Vitor Hugo Souza Santos",
      role: "Pneumologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
    {
      name: "João Isidro Fracasso",
      role: "Pneumologista",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    },
  ],
  Psicologia:[
    {
      name: "AUGUSTO BEBBER MARRONI",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9664-5530",
    },
    {
      name: "ALINE BASSO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9655-8010",
    },
    {
      name: "DAIANE PRADEGAN ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9604-3018",
    },
    {
      name: "ELIANE MARIA BIFFE ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-2022",
    },
    {
      name: "EDIMARA ANA PAGOTO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 999141670",
    },
    {
      name: "NATIELI BERGAMASCHI ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99193-2027",
    },
    {
      name: "THANISE FERNANDES ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-5294",
    },
    {
      name: "FRANCIELI SOTILLE BRUGNERA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(11) 9633-3249",
    },
    {
      name: "CLÍNICA FLOWRESCER  ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9612-1233",
    },
    {
      name: "CLÍNICA EQUILÍBRIO  ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-6974",
    },
    {
      name: "ANA PAULA DEON  LIFE CLIN",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(11) 98888-8888",
    },
    {
      name: "ANA PAULA DEON  LIFE CLIN",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99710-0386",
    },
    {
      name: "KARINE ALBERTI DE OLIVEIRA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99696-8009",
    },
    {
      name: "MEIRE TOMASI",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(11) 98888-8888",
    },
    {
      name: "MARIA LUISA GUZELA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99939-9139",
    },
    {
      name: "LILIAN STOLFO MACULAN RETTORE ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)99978-4337",
    },
    {
      name: "MATIELE PEREIRA PACHECO",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(55)981161216",
    },
    {
      name: "MAYARA LARICE DE SOUSA OLIVEIRA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99116-9590",
    },
    {
      name: "NATACHA LIANA GATTO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99159-5506",
    },
    {
      name: "MARCELLE CALDEIRA",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 996408174",
    },
    {
      name: "ANDRESSA ROCHA TIBOLLA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 999388027",
    },
    {
      name: "CARLA J. STUMPF",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99606-7162",
    },
    {
      name: "JOSSANDRA BELUSSO",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99115-0288",
    },
    {
      name: "ALANA BRANDELERO PORTO ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99903-5782",
    },
    {
      name: "RAQUEL VIRGINIA MOREIRA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99698-2275",
    },
    {
      name: "CASSIA BONAMIGO DA COSTA ",
      role: "Psicologia",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99989-2663",
      
    },
   
  ],
  Podologa:[
    {
      name: "ISELDA MORSOLIN FERREIRA ",
      role: " Podologa",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 9906-0791",
    },
    {
      name: "JOZIELI MARIANO",
      role: "Podologa",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 8432-6525",
    },
    {
      name: "SIMONE MONTUANI",
      role: "Podologa",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 99181-7647",
    },
  ], 
  Reumatologista:[
    {
      name: "ANDERSON NAPP ROCHA ",
      role: "REUMATOLOGISTA ",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54)3342-9414",
    },
  ], 
  Traumato:[
    {
      name: "AUGUSTO ALVES BADOTTI ",
      role: "TRAUM / COLUNA",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "DIEGO COLLARES  ",
      role: "TRAUM / COLUNA",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "EDER MENEGASSI MARTEL",
      role: "TRAUM / OMBRO COTOV",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "LUCAS SCHIRMER MARTINS",
      role: "TRAUM/ MÃO E PUNHO",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "MARCIO MEZZOMO",
      role: "TRAUMATO / JOELHO ",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "MARIO AUGUSTO DIAS",
      role: "TRAUM / JOELHO",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "MATEUS BREITENBACH SCHERER",
      role: "TRAUM/ PÉS / TORNOZELO",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "BRUNO ROSS ",
      role: "TRAUM/ QUADRIL",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "MARCELO CAMARGO DE ASSIS ",
      role: "TRAUM/ ORTOP PEDIÁ",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    {
      name: "JULIANO DOS SANTOS SUZIN ",
      role: "TRAUM/ PÉS / TORNOZELO ",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9426",
    },
    
  ],
  Urologista:[
    {
      name: "HENRIQUE ULGUIM PERIN ",
      role: "Urologista ",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
    }, 
    {
      name: "RODRIGO BALOTIN",
      role: "Urologista ",
      /*image: "assets/img/team/team-5.jpg",*/
      phone: "(54) 3342-9414",
      
    
    }, 
    {
      name: "MARCELO G JUSTOS (PREVENCARDIO)",
      role: "Urologista ",
      phone: "(54) 3342-2022",
      /*image: "assets/img/team/team-5.jpg",*/
     
    }, 
      
  ],
  Analisesclinicas:[
    {
      name: "HCR LAB  ",
      role: "Analises Clinicas ",
      phone: "(54) 3342-9428",
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
            <div class="contact">
              <i class="bi bi-telephone-fill"></i> ${doctor.phone}
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


