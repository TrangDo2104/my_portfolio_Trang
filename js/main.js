/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* MENU SHOW */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* MENU HIDDEN */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ACCORDION SKILLS */
const skillsContent = document.getElementsByClassName(
    "skills-container-content"
  ),
  skillsHeader = document.querySelectorAll(".skills-container-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-container-content skills-close";
  }
  if (itemClass === "skills-container-content skills-close") {
    this.parentNode.className = "skills-container-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

/* SERVICES MODAL */
const modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/* PORTFOLIO SWIPER  */
// var swiperPortfolio = new Swiper(".portfolio-container", {
//   cssMode: true,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

/* TESTIMONIAL */
// var swiperTestimonial = new Swiper(".testimonial-container", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 50,

//   breakpoints: {
//     568: {
//       slidesPerView: 2,
//     },
//   },
// });

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function scrollActive() {
    const verticalScrollPosition = window.scrollY || window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const navLink = document.querySelector(".nav-menu a[href='#" + sectionId + "']");
        
        if (navLink) {
            if (verticalScrollPosition > sectionTop && verticalScrollPosition <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        }
    });
}

function handleClick(event) {
    navLinks.forEach(navLink => {
        navLink.classList.remove("active-link");
    });
    event.target.classList.add("active-link");
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", handleClick);
});

window.addEventListener("scroll", scrollActive);

/* EMAIL JS */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // Use EmailJS to send the form data
  emailjs.sendForm('service_z3043tg', 'template_iu2a0u9', '#contact-form', '9dWIYRnlvISrOuFgH')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Show confirmation
      contactMessage.textContent = 'Message sent successfully ✅';
      // Clear input fields
      contactForm.reset();
    }, (error) => {
      console.log('FAILED...', error);
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌';
    });

  // Optionally, remove message after a delay
  setTimeout(() => {
    contactMessage.textContent = '';
  }, 5000);
};

contactForm.addEventListener('submit', sendEmail);

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 50,
  reset: true // Animations repeat
})

sr.reveal('.home-data, .home-social, .contact-container, .footer-container, .qualification-container')
sr.reveal('.home-img, .portfolio-box, .skills-icon', {origin: 'bottom'})
sr.reveal('.section-title, .section-subtitle', {origin: 'top'})
sr.reveal('.about-container-data, .skills-container-content, .services-container', {origin: 'left'})
sr.reveal('.about-container-img, .portfolio-container', {origin: 'right'})
sr.reveal('.project-bg', {interval: 100, origin: 'left'})

/* TYPED ANIMATION */
const typed = new Typed('.multiple-text', {
  strings: ['Data Scientist', 'Business Analyst', 'Data Analyst'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
/* DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      fade:'true',
      // grabCursor:'true',
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 15000,
          disableOnInteraction: true,
      },
      speed: 500, // Decrease speed for faster transitions (in milliseconds)
      breakpoints: {
        100: {
          slidesPerView: 1, // 1 slide per view for small devices
          spaceBetween: 0
        },
        432: {
          slidesPerView: 1.1, // 1 slide per view for small devices
          spaceBetween: 10
        },
        600: {
          slidesPerView: 1.5, // 1 slide per view for small devices
          spaceBetween: 10
        },
        850: {
          slidesPerView: 2, // 1 slide per view for small devices
          spaceBetween: 10
        },
        1190: {
          slidesPerView: 2.5, // 2 slides per view for medium devices
          spaceBetween: 10
        },
        1480: {
          slidesPerView: 3, // 3 slides per view for large devices
          spaceBetween: 30
        }
      }
  });
  // Add click event listener to each card
  document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    slide.addEventListener('click', () => {
      swiper.slideTo(index);
    });
  });
});