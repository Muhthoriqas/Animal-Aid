// Dropdow Navbar
let navbar = document.querySelector(".header .navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// Slider using Swiper JS
var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// Counter Animation

// Counter-Up2 : https://github.com/bfintal/Counter-Up2
// Code Source: https://codepen.io/mnunes/pen/RXQqXz

$(document).ready(function () {
  jQuery(function ($) {
    "use strict";

    var counterUp = window.counterUp["default"];

    var $counters = $(".counter");

    $counters.each(function (ignore, counter) {
      var waypoint = new Waypoint({
        element: $(this),
        handler: function () {
          counterUp(counter, {
            duration: 800,
            delay: 20,
          });
          this.destroy();
        },
        offset: "bottom-in-view",
      });
    });
  });
});

// Load More Button
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".donate-container .box-container .box"),
  ];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

// Back to Top
const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Countdown
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const eventDate = new Date("March 23, 2023 04:00:00");

const countdown = () => {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;

  const daysCalc = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursCalc = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesCalc = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsCalc = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  days.innerHTML = daysCalc;
  hours.innerHTML = hoursCalc;
  minutes.innerHTML = minutesCalc;
  seconds.innerHTML = secondsCalc;
};

setInterval(countdown, 1000);
