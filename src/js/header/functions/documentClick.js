import { burger, burgerBtn } from "../variables/variables.js";
import closeBurger from "./closeBurger.js";
import navLinkClick from "./navLinkClick.js";

function documentClick(event) {
  if (!burgerBtn.contains(event.target) && !burger.contains(event.target)) {
    closeBurger();
    burger.removeEventListener("click", navLinkClick);
    document.removeEventListener("click", documentClick);
  }
}

export default documentClick;
