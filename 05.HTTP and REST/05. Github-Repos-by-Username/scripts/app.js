function loadRepos() {
	const username = document.getElementById('username').value;
	const BASE_URL = 'https://api.github.com/users/';
	const ul = document.getElementById('repos');
	ul.removeChild(ul.firstElementChild);
	
	fetch(`${BASE_URL}${username}/repos`)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((el) => {
			const li = document.createElement('li');
			const aHref = document.createElement('a');
			aHref.href = el.html_url;
			aHref.textContent=el.full_name;
			li.appendChild(aHref);
			repos.appendChild(li);

		})
})
.catch((error) => console.log(error));

}

