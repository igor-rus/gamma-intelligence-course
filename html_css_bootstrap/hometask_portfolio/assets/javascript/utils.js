const toggleButton = document.getElementById("toggle");
const navigationItems = document.getElementById("navigation-items");
document.querySelectorAll(".navigation-item__link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

toggleButton.addEventListener("click", () => {
  navigationItems.classList.toggle("active");
});
