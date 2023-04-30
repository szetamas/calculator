function deleteChar() {
  $('#inputField').val(
    $('#inputField')
      .val()
      .slice(0, $('#inputField').val().length - 1)
  );
}
