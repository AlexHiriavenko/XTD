import i18next from "i18next";
import { dictionary } from "./dictionary.js";

function updateContent(lang) {
  // Функция для обновления содержимого страницы на основе выбранного языка
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    let key = element.getAttribute("data-i18n");
    if (dictionary[lang]?.translation[key]) {
      element.textContent = i18next.t(key);
    }
  });
}

export default updateContent;
