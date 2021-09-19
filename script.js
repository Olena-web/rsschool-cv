document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    menuSocial = document.querySelectorAll(".menu__link");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });
  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
  });
  menuSocial.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});
