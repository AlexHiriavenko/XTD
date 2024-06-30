import { appState } from "../appState.js";
import openBurger from "./functions/openBurger.js";
import closeBurger from "./functions/closeBurger.js";
import navLinkClick from "./functions/navLinkClick.js";
import documentClick from "./functions/documentClick.js";
import { burgerBtn, burger, btnLangGroup } from "./variables/variables.js";
import onBtnLangClick from "./functions/onBtnLangClick.js";
import setTransparent from "./functions/setTransparent.js";

function setBurger(event) {
  const target = event.target.closest("button");
  if (target) {
    if (appState.isBurgerOpen) {
      closeBurger();
      burger.removeEventListener("click", navLinkClick);
      document.removeEventListener("click", documentClick);
    } else {
      openBurger();
      burger.addEventListener("click", navLinkClick);
      document.addEventListener("click", documentClick);
    }
  }
}

// бургер меню
burgerBtn.addEventListener("click", setBurger);

// смена языка
btnLangGroup.addEventListener("click", onBtnLangClick);

// прозрачный хедер
window.addEventListener("scroll", setTransparent);
