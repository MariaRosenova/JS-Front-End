function solve(string, searchedWord)
{
    let words = string.split('');
    let counter=0;
    let checker='';
    let flag=false;
    for (let word of words) {
        if(word!==' ') {
            checker+=word;
        }
        else{
            flag = true;
        }
        if (flag) {
            if (checker===searchedWord) {
                counter++;
                checker='';
                
            }
            else if(!(Number(checker.length)===1)){
                    checker='';
            }
        }  
    }
    console.log(counter);
}

solve('softuni is great place for learning new programming languages',
'softuni'
);