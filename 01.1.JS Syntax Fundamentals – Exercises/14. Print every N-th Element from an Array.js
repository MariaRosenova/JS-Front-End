function printNthElement(array, steps) {
  for (let index = 0; index < array.length; index = steps) {
    console.log(array);
  }
}

printNthElement([2, 4, 15, 31], 5);
