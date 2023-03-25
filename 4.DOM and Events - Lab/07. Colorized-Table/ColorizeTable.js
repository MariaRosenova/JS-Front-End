function colorize() {
    const evenRows = document.querySelectorAll('tr:nth-child(even)');

    for(let row of evenRows){
        row.style.backgroundColor = "Teal";
    }
}