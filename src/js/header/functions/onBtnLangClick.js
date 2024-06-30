import changeLanguage from "../../i18next/changeLanguage.js";

function onBtnLangClick(event) {
  const targetBtn = event.target.closest("button");
  let btnLang = targetBtn?.getAttribute("data-lang");
  let validValues = ["en", "ru", "uk", "zh"];

  if (targetBtn && validValues.includes(btnLang)) {
    const prevPressedBtn = document.querySelector(".btn-lang.pressed");
    prevPressedBtn?.classList.remove("pressed");
    targetBtn.classList.add("pressed");

    changeLanguage(btnLang);
  }
}

export default onBtnLangClick;
