function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  const splitter = input.value.split('.');
  splitter.pop();
  console.log(splitter);
  while (splitter.length > 0) {
    let paragraph = splitter.splice(0,3)
    .map((p) => p.trimStart());
    const newParagraph = document.createElement('p');
    newParagraph.textContent = paragraph + '.';
    output.appendChild(newParagraph);
  
  }
}