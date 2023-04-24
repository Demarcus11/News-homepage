const navToggle = document.querySelector(".mobile-nav-toggle"),
  primaryNav = document.querySelector(".primary-nav"),
  body = document.querySelector("body"),
  primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  body.toggleAttribute("data-overlay");
});
