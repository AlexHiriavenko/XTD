import { appState } from "../../appState.js";
import { burger, burgerBtn } from "../variables/variables.js";

function openBurger() {
  burgerBtn.classList.add("opened");
  burger.classList.add("active");
  appState.isBurgerOpen = true;
}

export default openBurger;
