function signChecker(firstNum, secondNum, thirdNum) {
  let counterOfSigns = 0;
  if (firstNum < 0) {
    counterOfSigns++;
  }
  if (secondNum < 0) {
    counterOfSigns++;
  }
  if (thirdNum < 0) {
    counterOfSigns++;
  }

  if (counterOfSigns === 3 || counterOfSigns === 1) {
    console.log("Negative");
  } else if (counterOfSigns === 2) {
    console.log("Positive");
  }
  else{
    console.log('Positive');
  }
}

signChecker(-1, -2, -3);
