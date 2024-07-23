function getUserLang() {
  let userLang =
    localStorage.getItem("userLang") ||
    window.navigator.language ||
    window.navigator.languages[0];

  switch (true) {
    case userLang?.toLowerCase().includes("ru"):
      return "ru";
    case userLang?.toLowerCase().includes("uk") ||
      userLang?.toLowerCase().includes("ua"):
      return "uk";
    default:
      return "en";
  }
}

export default getUserLang;

// case userLang?.toLowerCase().includes("zh"):
//   return "zh";
