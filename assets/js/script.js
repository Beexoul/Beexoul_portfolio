"use strict";

const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");
const themeToggleBtn = document.querySelector("[data-theme-btn]");

// Variables for scroll direction detection
let lastScrollY = window.scrollY;
let isScrollingDown = false;

const setTheme = (theme) => {
  document.body.classList.remove("dark_theme", "light_theme");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
};

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    if (!isScrollingDown) {
      header.classList.add("hidden");
      isScrollingDown = true;
    }
  } else if (currentScrollY < lastScrollY) {
    if (isScrollingDown) {
      header.classList.remove("hidden");
      isScrollingDown = false;
    }
  }

  if (currentScrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
    header.classList.remove("hidden");
    isScrollingDown = false;
  }

  lastScrollY = currentScrollY;
});

navToggleBtn.addEventListener("click", () => {
  toggleClass(navToggleBtn, "active");
  toggleClass(navbar, "active");
  toggleClass(document.body, "active");
});

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleClass(toggleBtnBox, "active");
    toggleBtns.forEach((toggleBtn) => toggleClass(toggleBtn, "active"));
    toggleClass(skillsBox, "active");
  });
});

themeToggleBtn.addEventListener("click", () => {
  toggleClass(themeToggleBtn, "active");
  themeToggleBtn.classList.contains("active")
    ? setTheme("light_theme")
    : setTheme("dark_theme");
});

const userTheme = localStorage.getItem("theme");
if (userTheme === "light_theme") {
  toggleClass(themeToggleBtn, "active");
  setTheme("light_theme");
} else {
  setTheme("dark_theme");
}
