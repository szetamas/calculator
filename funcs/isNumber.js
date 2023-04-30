function isNumber(inputTex) {
  for (let i = 0; i < inputTex.length; i++) {
    if (
      !(
        (inputTex.charCodeAt(i) > 47 && inputTex.charCodeAt(i) < 58) ||
        inputTex.charCodeAt(i) === 45 ||
        inputTex.charCodeAt(i) === 46
      )
    ) {
      return false;
    }
  }
  return true;
}
