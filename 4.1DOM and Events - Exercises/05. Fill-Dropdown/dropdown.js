function addItem() {
    //document.querySelectorAll('input[type="button"]')
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    
    const textValue = newItemText.value;
    const textIValue = newItemValue.value;
    const option = document.createElement('option');
    option.textContent = textValue;
    option.value = textIValue;
    menu.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
    
   
}