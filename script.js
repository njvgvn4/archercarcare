/**
 * Archer Car Care — minimal vanilla JS
 * Handles: mobile menu, smooth scroll close, dynamic year
 */

(function () {
  "use strict";

  // Dynamic year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  function closeMenu() {
    mobileMenu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close mobile menu when a nav link is clicked
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });
})();