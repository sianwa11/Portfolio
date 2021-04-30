"use strict";

const scrollTo = function () {
  document.querySelector(".nav_links").addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);

    if (e.target.classList.contains("nav_link")) {
      const id = e.target.getAttribute("href");

      // Scroll into view
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }

    if (e.target.classList.contains("pdf_link")) {
      const url = e.target.getAttribute("href");
      // console.log(url);
      window.open(url);
    }
  });
};

const gsapAnimations = function () {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();

  tl.from(".content", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  });
  tl.from(
    ".stagger1",
    {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      ease: Power4.easeOut,
      duration: 2,
    },
    "-=1.5"
  );

  tl.from(
    ".hero-design",
    {
      opacity: 0,
      y: 50,
      ease: Power4.easeOut,
      duration: 1,
    },
    "-=2"
  );

  gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7),
  });

  gsap.from(".transition2", {
    scrollTrigger: {
      trigger: ".transition2",
      start: "top bottom",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".transition3", {
    scrollTrigger: {
      trigger: ".transition3",
      start: "top bottom",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6,
  });
};

const init = function () {
  gsapAnimations();
  scrollTo();
};

init();
