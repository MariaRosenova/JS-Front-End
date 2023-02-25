function subtract(array){
    let evenSum=0;
    let oddSum=0;
    let checker=0;
    for(let i=0; i<array.length; i++)
    {
        checker=Number(array[i]);
        if(checker%2===0){
          evenSum+=checker;
        }
        else{
            oddSum+=checker;
        }
    }     
    if(!(evenSum===0 && oddSum===0))
    {
        totalSum = evenSum-oddSum;
        console.log(`${totalSum}`);
    }
    else if(evenSum>0 && oddSum<0){
        console.log(`${evenSum}`);
    }
    else if(evenSum<0 && oddSum>0){
        console.log(`${oddSum}`);
    }
}


subtract([1,2,3,4,5,6]);