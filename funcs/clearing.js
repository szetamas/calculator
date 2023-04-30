function clearing() {
  if ($('#clear').val() === 'C') {
    $('#clear').val('sure?');
  } else {
    $('#inputField').val('');
    $('#clear').val('C');
  }
}
