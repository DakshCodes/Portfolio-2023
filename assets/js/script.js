'use strict';

// loader

function loader() {
  const tll = gsap.timeline({
    paused: "true"
  });
  tll.to("#percent, #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
  });
  tll.to("#preloader", {
    duration: .8,
    width: "0%"
  });

  tll.from(".container", {
    duration: 1.5,
    y: "-150%",
    delay: -3,
    height: "0%"
  }, "-=.2");

  tll.from('.jj', {
    y: '140%',
    opacity: 0,
    rotationZ: '10',
    duration: 1.40,
    ease: 'back.out',
    stagger: 0.06,
    delay: -1
  })
  tll.to('.jj span', {
    opacity: 0,
    rotationZ: '10',
    duration: 1.40,
    ease: 'back.out',
    stagger: 0.09,
    delay: 0.3
  })
  tll.to(".daksh-load", {
    // opacity: 0,
    duration: 1.3,
    y: "-150%",
    ease: 'back.out',
    delay: -0.4
  });
  var width = 1;
  var bar = document.getElementById("barconfrm");
  var id;
  function move() {
    id = setInterval(frame, 10);

  }
  move();
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      tll.play();
    }
    else {
      width++;
      bar.style.width = width + "%";
      document.getElementById("percent").innerHTML = width + "%";
    }
  }
}
// home
function Homeanimted() {

  const tlhome = gsap.timeline();

  tlhome.from(".sidebar-info .avatar-box", {
    y: -10,
    opacity: 0,
    duration: 0.4,
    ease: 'back.out',
    // delay: 4.5
  })
  tlhome.from(".sidebar-info .info-content h1", {
    x: -50,
    opacity: 0,
    duration: 0.4,
    rotationZ: '-10',
    ease: 'back.out',
  })
  tlhome.from(".sidebar-info .info-content p", {
    x: -50,
    opacity: 0,
    duration: 0.2,
    rotationZ: '-10',
    ease: 'back.out',
  })
  tlhome.from(".sidebar-info_more .contacts-list li", {
    y: -50,
    opacity: 0,
    duration: 0.9,
    rotationZ: '-10',
    ease: 'back.out',
    stagger: 0.2,
  })
  tlhome.from(".sidebar-info_more .social-list li", {
    x: 50,
    opacity: 0,
    duration: 0.3,
    rotationZ: '-10',
    ease: 'back.out',
    stagger: 0.2,
    delay: -0.9
  })

}

// about-page
function aboutanimted() {

  let typeSplit = new SplitType('.about .about-text p', {
    types: 'lines, words, chars',
    tagName: 'span'
  })
  const tlabout = gsap.timeline();
  tlabout.from(".about .article-title", {
    x: -50,
    opacity: 0,
    duration: 0.4,
    ease: 'easeInOut',
  })
  tlabout.from(".navbar .navbar-item", {
    x: -50,
    opacity: 0,
    duration: 0.4,
    rotationZ: '10',
    ease: 'easeInOut',
    stagger: 0.1,
  })
  tlabout.from(".about .about-text p .line", {
    y: '100%',
    opacity: 0,
    duration: 0.4,
    ease: 'back.inOut',
    stagger: 0.1,
    delay: -0.5
  })
  tlabout.from(".service .service-title", {
    x: '-60%',
    opacity: 0,
    duration: 0.5,
    ease: 'back.inOut',
    delay: -0.2
  })

  tlabout.from(".about .service-list .service-item", {
    y: '100%',
    opacity: 0,
    duration: 0.7,
    ease: 'back.inOut',
    stagger: 0.1,
    delay: -0.2
  })
}




loader();
Homeanimted();
aboutanimted();








// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Loader





