const templateCard = document.querySelector('.template-card').content
console.log(templateCard)
const fragment = document.createDocumentFragment()
const containerCallback = document.querySelector('.container--callback')

const API = "https://rickandmortyapi.com/api/character"

document.addEventListener('DOMContentLoaded', () => {
	// cuerpo del callback
	fetchDataCallback (API, (error, data) => {
		if(error) return error;
		// data posee todo lo que trajo la API
		data.results.map (character => {
			// console.log(character)
			pintarCards(character)
			containerCallback.appendChild(fragment)
		})
	});
	
})

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


let pintarCards = (datosApi) => {
	Object.values(datosApi)
	templateCard.querySelector('.card-title').textContent = datosApi.name
	templateCard.querySelector('.card-text').textContent = datosApi.status
	const clone = templateCard.cloneNode(true)

	// console.log(typeof(datosApi))
	fragment.appendChild(clone)
}


/* 
templateCard.querySelector('.card-title').textContent = 'test'
templateCard.querySelector('.card-text').textContent = 'lorem lorem test'

fragment.appendChild(templateCard)

containerCallback.appendChild(fragment) */


