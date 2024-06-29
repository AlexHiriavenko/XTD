import i18next from "i18next";
import updateContent from "./updateContent.js";
import { dictionary } from "./dictionary.js";

function changeLanguage(lng) {
  if (dictionary[lng]) {
    i18next.changeLanguage(lng, function (err, t) {
      updateContent(lng);
    });
  }
}

export default changeLanguage;
