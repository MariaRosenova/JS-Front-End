function create(words) {
    //const getGivenWords = [...words].split('');
    debugger;
    const container = document.getElementById('content');
    for (const word of words) {
        const newDiv = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';

        newDiv.addEventListener('click', () =>{
            paragraph.style.display = 'block';
    });
        newDiv.appendChild(paragraph);
        container.appendChild(newDiv);
}   
}