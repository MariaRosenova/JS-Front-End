function calcEvenAndOddNumbersSum(number) {
  let convertedNumber = 0;
  let evenSum = 0;
  let oddSum = 0;
  const splitter = String(number).split("");
  for (let i = 0; i < splitter.length; i++) {
    convertedNumber = Number(splitter[i]);
    if (convertedNumber % 2 == 0) {
      evenSum += convertedNumber;
    } else {
      oddSum += convertedNumber;
    }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(calcEvenAndOddNumbersSum(3495892137259234));
