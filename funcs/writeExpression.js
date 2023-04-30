function writeExpression(actExpression) {
  let texLength = $('#inputField').val().length;
  let beginIndex = $('#inputField')[0].selectionStart;
  let endIndex = $('#inputField')[0].selectionEnd;
  let beginTex = $('#inputField').val().slice(0, beginIndex);
  let endTex = $('#inputField').val().slice(endIndex, texLength);

  $('#inputField').val(beginTex + actExpression + endTex);
  $('#inputField')[0].selectionStart = beginIndex + actExpression.length;
  $('#inputField')[0].selectionEnd = beginIndex + actExpression.length;
}
