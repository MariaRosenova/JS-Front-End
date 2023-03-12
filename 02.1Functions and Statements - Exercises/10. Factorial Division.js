function factorial(firstNum, secondNum) {
  function factorialNum(number) {
    //base case
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorialNum(number - 1);
    }
  }

  let result = factorialNum(firstNum) / factorialNum(secondNum);
  console.log(result.toFixed(2));
}

factorial(5, 2);
