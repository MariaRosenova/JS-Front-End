function subtract() {
    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');

    const sum = parseFloat(firstInput) - parseFloat(secondInput);
    result.innerText = sum;
}
