import { appState } from "../appState.js";
import openBurger from "./functions/openBurger.js";
import closeBurger from "./functions/closeBurger.js";
import navLinkClick from "./functions/navLinkClick.js";
import documentClick from "./functions/documentClick.js";
import { burgerBtn, burger } from "./variables/variables.js";

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

burgerBtn.addEventListener("click", setBurger);

///////////  test ////////////////

import getData from "../utils/getData.js";
import { dataBase } from "../databasePaths/databasePaths.js";

async function getManagers() {
  const testData = await getData(dataBase.MANAGERS_PATH);
  console.log(testData);
}

getManagers();
