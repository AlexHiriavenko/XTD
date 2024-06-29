import closeBurger from "./closeBurger.js";

function navLinkClick(event) {
  const target = event.target.closest(".nav__link");
  if (target) {
    closeBurger();
  }
}

export default navLinkClick;
