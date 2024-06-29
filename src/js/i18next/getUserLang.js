function getUserLang() {
  let userLang = window.navigator.language || window.navigator.languages[0];

  switch (true) {
    case userLang?.toLowerCase().includes("ru"):
      return "ru";
    case userLang?.toLowerCase().includes("uk") ||
      userLang?.toLowerCase().includes("ua"):
      return "uk";
    case userLang?.toLowerCase().includes("zh"):
      return "zh";
    default:
      return "en";
  }
}

export default getUserLang;
