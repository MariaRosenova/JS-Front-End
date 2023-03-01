function solve(numberStart,numberEnd) {
    let sum=0;
    let arr=[];
    for (let index = numberStart; index <= numberEnd; index++) {
        sum+=index;
        arr += [index + ' '];
      
    }
        console.log(arr);
        console.log(`Sum: ${sum}`);
}

solve(5, 10);