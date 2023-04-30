function addToMemory(newData) {
  if (memory.length > 100) {
    memory.shift();
  }
  memory.push(newData);
  memoryIndex = memory.length - 1;
}
