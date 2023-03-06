function substring(word, text) {
  let wordLowerCase = word.toLowerCase();//case sensitive!
  let textLowerCase = text.toLowerCase();

  if (textLowerCase.includes(wordLowerCase)) {
    return word;
  }
  return `${word} not found!`;
}
console.log(substring("python", "JavaScript is the best programming language"));
