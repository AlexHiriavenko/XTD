import { header } from "../variables/variables.js";

function setTransparent() {
  let trnsparentElement = header;
  if (window.scrollY >= 80) {
    trnsparentElement.classList.add("transparent");
  } else {
    trnsparentElement.classList.remove("transparent");
  }
}

export default setTransparent;
