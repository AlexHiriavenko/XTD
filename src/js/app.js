import * as header from "./header/header.js";
import * as teamSlider from "./teamSlider/teamSlidaer.js";
import * as i18next from "./i18next/i18next.js";

const animatedModal = document.getElementById("animatedModal");
const openAnimatedModal = document.querySelector(".messenger-link.weechat");
const closeAnimatedModal = document.getElementById("closeAnimatedModal");

openAnimatedModal.addEventListener("click", (event) => {
  event.preventDefault();
  animatedModal.showModal();
  animatedModal.style.opacity = "1";
});

closeAnimatedModal.addEventListener("click", () => {
  animatedModal.style.opacity = "0";
  setTimeout(() => animatedModal.close(), 500);
});
