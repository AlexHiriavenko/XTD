import i18next from "i18next";
import updateContent from "./updateContent.js";
import { dictionary } from "./dictionary.js";
import setVideoPath from "../aboutCompany.js/setVideoPath.js";

function changeLanguage(lng) {
  console.log(dictionary[lng]);
  if (dictionary[lng]) {
    i18next.changeLanguage(lng, function (err, t) {
      updateContent(lng);
      setVideoPath(lng);
    });
  }
}

export default changeLanguage;
