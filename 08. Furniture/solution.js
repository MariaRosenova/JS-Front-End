function solve() {
  const [generateTextArea, buyTextArea] 
  = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn]
  = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('.table > tbody');

   generateBtn.addEventListener('click', generateHandler());
   
  for (const input of a) {
    
  }

}

function createElement(type, content, parentNode, id, classes, attributes){
   const htmlElement = document.createElement(type);

   if (content && type !== 'input') {
      htmlElement.textContent = content;
   }

   if (content && type === 'input') {
    htmlElement.value = content;
   }

   if (id) {
    htmlElement.id = id;
   }
   if(parentNode){
    parentNode.appendChild(htmlElement);
   }
   if (classes) {
    htmlElement.classList.add(...classes);
   }
   // {src: 'link to image', href: 'link to site', type:'checkbox'}
   if (attributes) {
    htmlElement.setAttribute(key, attributes[key]);
   }
}
