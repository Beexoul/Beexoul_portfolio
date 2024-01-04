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

const setTheme = (theme) => {
    document.body.classList.remove("dark_theme", "light_theme");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
};

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        toggleClass(header, "active");
        toggleClass(goTopBtn, "active");
    } else {
        toggleClass(header, "active");
        toggleClass(goTopBtn, "active");
    }
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
    themeToggleBtn.classList.contains("active") ? setTheme("light_theme") : setTheme("dark_theme");
});

const userTheme = localStorage.getItem("theme");
if (userTheme === "light_theme") {
    toggleClass(themeToggleBtn, "active");
    setTheme("light_theme");
} else {
    setTheme("dark_theme");
}
