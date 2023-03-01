function sum(number) {
    number=Array.from(number.toString()).map(Number);
    let result = 0;

    for (let index = 0; index < number.length; index++) {
        result+=number[index];
        
    }
    console.log(result);
}

sum(245678);