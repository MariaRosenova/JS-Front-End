function attachEvents() {
    // TODO:
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const phoneBookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    loadBtn.addEventListener('click', loadInfo);
    createBtn.addEventListener('click', createData);

    
    function deleteBtn(e){
        const id = this.id;
        const httpHeaders = {
            method:'DELETE'
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then((response) => response.json())
        .then((loadInfo))
        .catch((err) => console.err(err));
        
    }

    function loadInfo(){
        fetch(BASE_URL)
        .then((response)=> response.json())
        .then((data) => {
            data = Object.values(data);
            phoneBookContainer.innerHTML = ''; //!!!!!
            for (const {person, phone, _id} of data) {
                const li = document.createElement('li');
                const btn = document.createElement('button');
                btn.textContent = 'Delete';
                btn.id = _id;
                btn.addEventListener('click',deleteBtn);
                li.innerHTML = `${person}:  ${phone}`;
                li.appendChild(btn);
                phoneBookContainer.appendChild(li);
            }
        })
        .catch((err) => console.error(err))
    }

  
    function createData(){
       // this.id = _id;
        const person = personInput.value.trim();
        const phone = phoneInput.value.trim();
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person , phone})
        };
        fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then(() => {
            loadInfo();
            personInput.value = '';
            phoneInput.value = '';
        })
        .catch((err) => console.err(err))
    }
}

attachEvents();