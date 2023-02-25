function substring(word,startIndex,endIndex){

    let newWord = (word.substring(startIndex,endIndex+1)).split("");
    let readyWord = '';
    for (let index = 0; index < newWord.length; index++) {
        readyWord+=newWord[index];
    }
    console.log(readyWord);
}
substring('SkipWord', 4, 7);