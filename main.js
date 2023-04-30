//TODO:memory could be in session/cookie too
const memory = [];
let memoryIndex = 0;
const phone = phoneCheck();
let beginIndexOnPhone = 0;
let endIndexOnPhone = 0;

$(document).ready(function () {
  $('body').click(function () {
    if (!phone) {
      $('#inputField').trigger('focus');
    }
  });

  $(':button:not(#clear)').click(function () {
    $('#clear').val('C');
  });

  $('#inputField').on('input', function () {
    $('#clear').val('C');
  });

  $('#inputField').click(function () {
    if (phone) {
      beginIndexOnPhone = $('#inputField')[0].selectionStart;
      endIndexOnPhone = $('#inputField')[0].selectionEnd;
    }
  });

  $('.expression').click(function () {
    writeExpression($(this).val());
  });

  $('.specExpression').click(function () {
    let expression;
    if ($(this).val() === '√') {
      expression = 'sqrt(';
    } else if ($(this).val() === '|') {
      expression = 'abs(';
    } else {
      expression = $(this).val() + '(';
    }
    writeExpression(expression);
  });

  $('#memoryUp').click(function () {
    changeMemory(-1);
  });

  $('#memoryDown').click(function () {
    changeMemory(1);
  });

  $('#clear').click(clearing);

  //keydown event isn't necessarily because the backspace could delete a char
  $('#delete').click(deleteChar);

  $('#equal').click(calculate);

  $('body').on('keydown', function (e) {
    switch (e.keyCode) {
      case 13: //ENTER
        calculate();
        break;
      case 38: //UP
        changeMemory(-1);
        break;
      case 40: //DOWN
        changeMemory(1);
        break;
    }
  });

  $('.btn-check').click(function () {
    changeBgColor($(this).attr('id'));
  });
});
