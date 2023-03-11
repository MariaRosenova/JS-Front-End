function isItPerfect(number) {
  let arr = [];
  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      arr.push(index);
    }
  }

  let divisorsSum = arr.reduce(
    (previousVal, currentVal) => previousVal + currentVal,
    0
  );

  if (number === divisorsSum) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

isItPerfect(6);
