import { btnLangGroup } from "../variables/variables.js";

function setActiveBtnLang(userLang) {
  const targetBtn = btnLangGroup.querySelector(
    `.btn-lang[data-lang="${userLang}"]`
  );

  targetBtn?.classList.add("pressed");
}

export default setActiveBtnLang;
