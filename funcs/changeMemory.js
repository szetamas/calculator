function changeMemory(where) {
  $('#clear').val('C');
  if (memoryIndex + where >= 0 && memoryIndex + where < memory.length) {
    memoryIndex = memoryIndex + where;
    $('#inputField').val(memory[memoryIndex]);
  }
}
