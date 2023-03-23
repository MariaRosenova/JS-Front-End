function addItem() {
  //newItemText
  let ulContainer = document.getElementById('items'); // container
  let input = document.getElementById('newItemText'); //input 
  let newLi = document.createElement('li'); //new input
  let newAnchor = document.createElement('a');
  newLi.textContent = input.value;
  newAnchor.textContent = '[Delete]';
  newAnchor.setAttribute('href', '#');
  newAnchor.addEventListener('click', deleteHandler);
  newLi.appendChild(newAnchor);
  ulContainer.appendChild(newLi);
  

  function deleteHandler(e){
    const anchor = e.currentTarget;
    anchor.parentElement.remove();
  }
}