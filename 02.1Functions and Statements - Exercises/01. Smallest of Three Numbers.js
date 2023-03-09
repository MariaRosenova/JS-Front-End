function smallestNumber(firstNum, secondNum, thirdNum) {
  let checker = 0;
  let arr = [firstNum, secondNum, thirdNum];
  const theSmallestNumber = Math.min(...arr);
  console.log(theSmallestNumber);
}

smallestNumber(600, 342, 123);
