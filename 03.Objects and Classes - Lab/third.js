
function sumAndConvertToBinary(firstData, secondData) {

  let firstArr = firstData;
  let secondArr = secondData;
  let resultArr = [];
  let result = [];

  for (let i = firstArr.length; i > 0 ; i--) {
    // let current num - resultArr[i]
    let currentSum = firstArr[i] + secondArr[i];
    if (currentSum>9) {
        resultArr[i] = currentSum % 10;
    }
}


for(let i = 0; i<resultArr.length; i++){
    let curNum = i;

    if (curNum>9) {
        
    }
}
if (sumOfCurrentDigits>9) {
    let currentSum = sumOfCurrentDigits % 10;
    result.unshift(currentSum);
    
    additionalParameter = 1;
}else{
    result.unshift(sumOfCurrentDigits);
    additionalParameter = 0;
}



result.reverse();
console.log(result);
}
sumAndConvertToBinary([0,2,3,5], [9,7,8,4]);
