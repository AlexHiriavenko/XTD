import { appState } from "../../appState.js";
import { burger, burgerBtn } from "../variables/variables.js";

function closeBurger() {
  burgerBtn.classList.remove("opened");
  burger.classList.remove("active");
  appState.isBurgerOpen = false;
}

export default closeBurger;
