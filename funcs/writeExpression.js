function writeExpression(actExpression) {
  let texLength = $('#inputField').val().length;
  let beginIndex;
  let endIndex;
  if (phone) {
    beginIndex = beginIndexOnPhone;
    endIndex = endIndexOnPhone;
  } else {
    beginIndex = $('#inputField')[0].selectionStart;
    endIndex = $('#inputField')[0].selectionEnd;
  }

  let beginTex = $('#inputField').val().slice(0, beginIndex);
  let endTex = $('#inputField').val().slice(endIndex, texLength);

  $('#inputField').val(beginTex + actExpression + endTex);
  if (phone) {
    beginIndexOnPhone = beginIndex + actExpression.length;
    endIndexOnPhone = beginIndex + actExpression.length;
  } else {
    $('#inputField')[0].selectionStart = beginIndex + actExpression.length;
    $('#inputField')[0].selectionEnd = beginIndex + actExpression.length;
  }
}
