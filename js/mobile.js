const btnMobile = document.querySelector(".nav__mobile");
const navLinks = document.querySelector(".nav__links");

btnMobile.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
