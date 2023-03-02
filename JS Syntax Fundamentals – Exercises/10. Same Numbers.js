function checker(number) {
  let digits = number.toString().split("");
  let sum = 0;
  let flag = false;
  for (let index = 0; index < digits.length; index++) {
    if (digits[index] === digits[index + 1]) {
      flag = true;
    }
    sum += Number(digits[index]);
  }
  if (flag) {
    console.log(`${flag}`);
    console.log(`${sum}`);
  } else {
    console.log(`${flag}`);
    console.log(`${sum}`);
  }
}

checker(2222222);
