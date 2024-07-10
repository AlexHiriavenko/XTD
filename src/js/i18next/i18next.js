import i18next from "i18next";
import getData from "../utils/getData.js";
import { dataBase } from "../databasePaths/databasePaths.js";
import updateContent from "./updateContent.js";
import getUserLang from "./getUserLang.js";
import changeLanguage from "./changeLanguage.js";
import setActiveBtnLang from "../header/functions/setActiveBtnLang.js";
import { dictionary, setDictionary } from "./dictionary.js";
import setVideoPath from "../aboutCompany.js/setVideoPath.js";

// Получаем язык пользователя
const userLang = getUserLang();

async function i18nextInit() {
  const dictionaryDB = await getData(dataBase.DICTIONARY_PATH);
  setDictionary(dictionaryDB);
  // Инициализируем i18next с языком пользователя
  i18next.init(
    {
      lng: userLang, // Используем язык пользователя как язык по умолчанию
      resources: dictionary,
    },
    function (err, t) {
      // Функция, выполняемая после инициализации
      updateContent(userLang); // Передаем язык пользователя для обновления содержимого
      setActiveBtnLang(userLang); // красим кнопку с нужным языком
      setVideoPath(userLang);
    }
  );
}

const button = document.querySelector('[data-lang="ru"]');

i18nextInit();

button.addEventListener("click", function () {
  changeLanguage("ru");
});
