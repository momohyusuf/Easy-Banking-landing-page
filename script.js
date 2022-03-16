const toggle = document.getElementById("toggle-menu");
const navBar = document.querySelector(".nav-items");
const closeMenu = document.getElementById("close-menu");
toggle.addEventListener("click", () => {
  navBar.classList.toggle("show-nav-items");
  toggle.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navBar.classList.toggle("show-nav-items");
  toggle.style.display = "block";
  closeMenu.style.display = "none";
});
