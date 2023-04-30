function calculate() {
  addToMemory($('#inputField').val());

  let tex = $('#inputField').val();
  tex = tex.replace(/ /g, '');
  //if have some letter that is not know by the math.js then have to change here

  try {
    let result = math.evaluate(tex).toString();
    let resultAfterDot = '';
    if (result.lastIndexOf('.') >= 0) {
      resultAfterDot = result.slice(result.lastIndexOf('.'), result.length);
      result = result.slice(0, result.lastIndexOf('.'));
    }

    $('#inputField').val('');
    //may if the number is negative the '-' could be the part of these segmentation
    if (isNumber(result)) {
      for (let i = result.length - 1, j = 0; i >= 0; i--, j++) {
        if (j === 3) {
          j = 0;
          $('#inputField').val(' ' + $('#inputField').val());
        }
        $('#inputField').val(result[i] + $('#inputField').val());
      }
    } else {
      $('#inputField').val(result);
    }

    $('#inputField').val($('#inputField').val() + resultAfterDot);

    addToMemory($('#inputField').val());
    //it is for &nbsp; (non break space)
    $('#error').text('\xA0');
  } catch (error) {
    let errorTex = error.toString();
    let errorStartIndex =
      errorTex.indexOf('Error: ') >= 0 ? errorTex.indexOf('Error: ') + 7 : 0;
    $('#error').text(errorTex.slice(errorStartIndex, errorTex.length));
  }
}
