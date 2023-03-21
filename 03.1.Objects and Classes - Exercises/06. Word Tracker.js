function tracker(input){
    let words = {};
    let searchedWords = input.shift().split(' ');
    for (const word of searchedWords) {
        let count = input.filter((w) => w === word).length;
        words[word] = count;
    }
    //console.log(words);
    let sortedWords = Object.entries(words).sort((wordA, wordB) => {
        let [nameA, countA] = wordA;
        let [nameB, countB] = wordB;

        return countB - countA;
    });
    for(const [word,count] of sortedWords){
        console.log(`${word} - ${count}`);
}}

tracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );