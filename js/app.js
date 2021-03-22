const templateCard = document.querySelector('.template-card').content
console.log(templateCard)
const fragment = document.createDocumentFragment()
const containerCallback = document.querySelector('.container--callback')

const API = "https://rickandmortyapi.com/api/character"

// callback
const fetchDataCallback = (url_api, callback) => {
	const datos = new XMLHttpRequest()
	datos.open('GET', url_api, true)
	datos.onreadystatechange = () => {
		if (datos.readyState === 4) {
			if(datos.status === 200) {
				callback(null, JSON.parse(datos.responseText))
			} else {
				callback(new Error('Error'), null)
			}
		}
	};
	datos.send()
}

// cuerpo del callback
fetchDataCallback (API, (error, data) => {
	if(error) return error;
	// data posee todo lo que trajo la API
	data.results.map (character => {
		console.log(character)
		
	})
});
/* 
templateCard.querySelector('.card-title').textContent = 'test'
templateCard.querySelector('.card-text').textContent = 'lorem lorem test'

fragment.appendChild(templateCard)

containerCallback.appendChild(fragment) */


