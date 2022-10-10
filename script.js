"use strict";

// Navigation On Mobile Screens

const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

// Scroll Into First Section When clicking Arrow

const firstSectionEl = document.querySelector(".first-section");

const arrowDown = document.querySelector(".arrow-down");

arrowDown.addEventListener("click", function () {
  firstSectionEl.scrollIntoView({ behavior: "smooth" });
});
