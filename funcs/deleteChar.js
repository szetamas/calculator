function deleteChar() {
  let beginIndex = $('#inputField')[0].selectionStart;
  let endIndex = $('#inputField')[0].selectionEnd;
  if (beginIndex === endIndex && beginIndex !== 0) {
    $('#inputField').val(
      $('#inputField')
        .val()
        .slice(0, beginIndex - 1) +
        $('#inputField').val().slice(beginIndex, $('#inputField').val().length)
    );
    $('#inputField')[0].selectionStart = beginIndex - 1;
    $('#inputField')[0].selectionEnd = beginIndex - 1;
  } else {
    $('#inputField').val(
      $('#inputField').val().slice(0, beginIndex) +
        $('#inputField').val().slice(endIndex, $('#inputField').val().length)
    );
    $('#inputField')[0].selectionStart = beginIndex;
    $('#inputField')[0].selectionEnd = beginIndex;
  }
}
