function sumTable() {
    let total_sum = 0;
    const table = document.querySelectorAll('td:nth-child(even)');
    const sum = document.getElementById("sum");
    for(let i = 0; i<table.length-1; i++){
        total_sum += parseFloat(table[i].innerText);
    }   
    sum.innerText = total_sum.toFixed(2);

}